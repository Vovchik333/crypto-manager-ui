import { Icon, IconLink } from '@/lib/components';
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
            <label htmlFor="menu-toggle" className={styles['menu__toggle-icon']}>
                <Icon name={IconName.BARS}/>
            </label>
            <nav className={styles['menu__content']}>
                <header className={styles['menu__header']}>
                    <label htmlFor="menu-toggle" className={styles['menu__close-icon']} >
                        <Icon 
                            name={IconName.XMARK}
                        />
                    </label>
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
