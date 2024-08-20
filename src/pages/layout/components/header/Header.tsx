import { 
    useAppDispatch, 
    useAppSelector 
} from '../../../../hooks';
import { 
    IconButton, 
    Input 
} from '../../../../components';
import { 
    AppRoute, 
    IconName, 
    InputType 
} from '../../../../common/enums';
import { signOut } from '../../../../store/auth/actions';
import { IconLink } from '../../../../components/icon-link/IconLink';
import './Header.css';

const Header: React.FC = () => {
    const dispatch = useAppDispatch();
    const user = useAppSelector(state => state.auth.user);

    const hasUser = Boolean(user);

    const handleClickMenu = () => {
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
                onClick={handleClickMenu}
            />
            <nav className='header__menu'>
                <header className='header__menu-header'>
                    <IconButton 
                        className='icon-button header__close-icon' 
                        name={IconName.XMARK} 
                        onClick={handleClickMenu} 
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