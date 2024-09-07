import { User } from "@/common/types";
import { Icon } from "@/lib/components";
import { IconName } from "@/lib/enums/components";
import styles from './styles.module.scss';

type Props = {
    user: User;
};

const UserPreview: React.FC<Props> = ({
    user
}) => {
    return (
        <section className={styles['user-preview']}>
            <Icon name={IconName.USER} />
            <p>{user.nickname}</p>
        </section>
    );
};

export { UserPreview };
