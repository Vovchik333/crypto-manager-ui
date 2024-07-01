import { 
    useAppDispatch, 
    useAppSelector 
} from '../../../../hooks/hooks';
import { IconButton, Input } from '../../../../components/components';
import { AppRoute, IconName, InputType } from '../../../../common/enums/enums';
import { signOut } from '../../../../store/auth/actions';
import './Header.css';
import { IconLink } from '../../../../components/icon-link/IconLink';

const Header: React.FC = () => {
    const dispatch = useAppDispatch();
    const user = useAppSelector(state => state.auth.user);

    const hasUser = Boolean(user);

    const handleOnClickMenu = () => {
        const menuToggle = document.getElementById('menu-toggle') as HTMLInputElement;
        menuToggle.checked = !menuToggle.checked;
    }

    const handleSignOut = async () => {
        await dispatch(signOut());
    }

    return (
        <header className='header'>
            <Input 
                id='menu-toggle' 
                className='header__menu-toggle'
                type={InputType.CHECKBOX} 
            />
            <IconButton 
                className='icon-button' 
                name={IconName.BARS} 
                onClick={handleOnClickMenu}
            />
            <nav className='header__menu'>
                <header className='header__menu-header'>
                    <IconButton 
                        className='icon-button header__close-icon' 
                        name={IconName.XMARK} 
                        onClick={handleOnClickMenu} 
                    />
                </header>
                <section className='header__menu-items'>
                    {hasUser ? (
                        <>
                            <IconLink 
                                className='icon-link header__menu-item' 
                                to={AppRoute.PORTFOLIOS}
                                name={IconName.COINS}
                            >Portfolios</IconLink>
                            <IconLink 
                                className='icon-link header__menu-item' 
                                to={AppRoute.SIGN_OUT}
                                name={IconName.SIGN_OUT}
                                onClick={handleSignOut}
                            >Sign Out</IconLink>
                        </>
                    ) : (
                        <IconLink 
                            className='icon-link header__menu-item' 
                            to={AppRoute.SIGN_IN}
                            name={IconName.SIGN_IN}
                        >Sign In</IconLink>
                    )}
                </section>
            </nav>
        </header>
    );
}

export { Header };