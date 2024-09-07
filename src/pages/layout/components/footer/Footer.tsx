import styles from './styles.module.scss';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <span 
                className={styles['footer__author-info']}
            >Created by <a className={styles['footer__author-info-link']} href="https://github.com/Vovchik333" target='_blank'>Volodymyr Potapenko</a>
            </span>
        </footer>
    );
}

export { Footer };