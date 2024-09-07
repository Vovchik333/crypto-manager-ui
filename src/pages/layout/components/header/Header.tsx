import { useAppSelector } from '@/lib/hooks';
import { Menu, UserPreview } from './components';
import { User } from '@/common/types';
import styles from './styles.module.scss';

const Header: React.FC = () => {
    const { user } = useAppSelector(state => state.auth);

    const hasUser = user !== null;

    return (
        <header className={styles.header}>
            <Menu hasUser={hasUser} />
            {hasUser && (
                <UserPreview user={user as User}/>
            )}
        </header>
    );
}

export { Header };
