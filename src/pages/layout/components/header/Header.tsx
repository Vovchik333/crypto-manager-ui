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

    const openMenu = () => {
        const menu = document.getElementById('side-menu') as HTMLElement;
        menu.setAttribute('style', `
            width: 300px;
            overflow: scroll;
            border-right: var(--btn-color) solid 1px;
            border-bottom: var(--btn-color) solid 1px;
        `);
    }

    const closeMenu = () => {
        const menu = document.getElementById('side-menu') as HTMLElement;
        menu.setAttribute('style', `
            width: 0;
            overflow: hidden;
            border: none;
        `);
    }

    const handleSignOut = async () => {
        await dispatch(signOut());
        navigate(AppRoute.ROOT);
    }

    return (
        <header className='main-header'>
            <IconButton className='icon-button' name={IconName.BARS} onClick={openMenu}></IconButton>
            <nav id='side-menu' className='menu roboto-regular'>
                <IconButton className='xmark icon-button' name={IconName.XMARK} onClick={closeMenu}></IconButton>
                {
                    hasUser ? (
                        <>
                            <Link className='menu-item' to={AppRoute.PORTFOLIOS}>
                                <IconButton className='icon-button' name={IconName.COINS}></IconButton>
                                <span>Portfolios</span>
                            </Link>
                            <div className='menu-item' onClick={handleSignOut}>
                                <IconButton className='icon-button' name={IconName.SIGN_OUT}></IconButton>
                                <span>Sign Out</span>
                            </div>
                        </>
                    ) : (
                        <Link className='menu-item' to={AppRoute.SIGN_IN}>
                            <IconButton className='icon-button' name={IconName.SIGN_IN}></IconButton>
                            <span>Sign In</span>
                        </Link>
                    )
                }
            </nav>
        </header>
    );
}

export { Header };