import { IconButton, IconLink } from '@/lib/components';
import { IconName, SelectiveInputType } from '@/lib/enums/components';
import { AppRoute } from '@/common/enums';
import { useAppDispatch } from '@/lib/hooks';
import styles from './styles.module.scss';
import { signOut } from '@/store/auth/actions';

type Props = {
    hasUser: boolean;
};

const Menu: React.FC<Props> = ({
    hasUser
}) => {
    const dispatch = useAppDispatch();

    const handleClickMenu = () => {
        const menuToggle = document.getElementById('menu-toggle') as HTMLInputElement;
        menuToggle.checked = !menuToggle.checked;
    }

    const handleSignOut = async () => {
        await dispatch(signOut());
    }

    return (
        <section className={styles.menu}>
            <input 
                id='menu-toggle' 
                className={styles['menu__toggle']}
                type={SelectiveInputType.CHECKBOX} 
            />
            <IconButton 
                name={IconName.BARS} 
                onClick={handleClickMenu}
            />
            <nav className={styles['menu__content']}>
                <header className={styles['menu__header']}>
                    <IconButton 
                        className={styles['menu__close-icon']} 
                        name={IconName.XMARK} 
                        onClick={handleClickMenu} 
                    />
                </header>
                <section className={styles['menu__items']}>
                    {hasUser ? (
                        <>
                            <IconLink 
                                className={styles['menu__item']} 
                                to={AppRoute.PORTFOLIOS}
                                name={IconName.COINS}
                            >Portfolios</IconLink>
                            <IconLink 
                                className={styles['menu__item']}  
                                to={AppRoute.SIGN_OUT}
                                name={IconName.SIGN_OUT}
                                onClick={handleSignOut}
                            >Sign Out</IconLink>
                        </>
                    ) : (
                        <IconLink 
                            className={styles['menu__item']}  
                            to={AppRoute.SIGN_IN}
                            name={IconName.SIGN_IN}
                        >Sign In</IconLink>
                    )}
                </section>
            </nav>
        </section>
    );
}

export { Menu };
