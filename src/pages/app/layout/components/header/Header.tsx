import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../../hooks/hooks';
import { AppRoute } from '../../../../../common/enums/enums';
import { signOut } from '../../../../../store/auth/actions';
import barsSolid from '../../../../../assets/icons/bars-solid.svg';
import xmark from '../../../../../assets/icons/xmark.svg';
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
            <img className='bars-solid' src={barsSolid} alt="bars-solid" onClick={openMenu} />
            <nav id='side-menu' className='menu roboto-regular'>
                <img className='xmark' src={xmark} alt="xmark" onClick={closeMenu} />
                {
                    hasUser ? (
                        <>
                            <Link className='menu-item' to={AppRoute.PORTFOLIOS}>Portfolios</Link>
                            <div className='menu-item' onClick={handleSignOut}>Sign Out</div>
                        </>
                    ) : (
                        <Link className='menu-item' to={AppRoute.SIGN_IN}>Sign In</Link>
                    )
                }
            </nav>
        </header>
    );
}

export { Header };