import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';
import { AppRoute } from '../../../../common/enums/enums';
import { signOut } from '../../../../store/auth/actions';
import { IconName } from '../../../../common/enums/components/components';
import { IconButton } from '../../../../components/icon-button/IconButton';
import './Header.css';

const Header: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const user = useAppSelector(state => state.auth.user);
    const hasUser = Boolean(user);

    const handleOnClickMenu = () => {
        const menuToggle = document.getElementById('menu-toggle') as HTMLInputElement;
        menuToggle.checked = !menuToggle.checked;
    }

    const handleSignOut = async () => {
        await dispatch(signOut());
        navigate(AppRoute.ROOT);
    }

    return (
        <header className='main-header'>
            <input id='menu-toggle' type='checkbox' />
            <IconButton className='icon-button' name={IconName.BARS} onClick={handleOnClickMenu}/>
            <nav className='menu'>
                <header className='menu-header'>
                    <IconButton className='xmark icon-button' name={IconName.XMARK} onClick={handleOnClickMenu}></IconButton>
                </header>

                {
                    hasUser ? (
                        <>
                            <Link className='menu-item' to={AppRoute.PORTFOLIOS}>
                                <IconButton className='icon-button' name={IconName.COINS} label={'Portfolios'} />
                            </Link>
                            <div className='menu-item' onClick={handleSignOut}>
                                <IconButton className='icon-button' name={IconName.SIGN_OUT} label={'Sign Out'} />
                            </div>
                        </>
                    ) : (
                        <Link className='menu-item' to={AppRoute.SIGN_IN}>
                            <IconButton className='icon-button' name={IconName.SIGN_IN} label={'Sign In'} />
                        </Link>
                    )
                }
            </nav>
        </header>
    );
}

export { Header };