import { Link } from 'react-router-dom';
import { AppRoute } from '@/common/enums';
import { Button } from '@/lib/components/button/Button';
import assetsHomeImage from '@/assets/images/assets_home.png';
import styles from './styles.module.scss';

const Home = () => {
    return (
        <main className={styles['home-page']}>
            <section className={styles['home-page__description-section']}>
                <h1 className={styles['home-page__title']}>Meet the most convenient and useful crypto manager</h1>
                <p className={styles['home-page__description']}>
                    Gain good investment management experience. 
                    The app has many analytical tools that will 
                    help you monitor the state of your crypto portfolio.
                </p>
                <Link className={styles['home-page__sign-in-link']} to={AppRoute.SIGN_IN}>
                    <Button isPrimary>Get Started</Button>
                </Link>
            </section>
            <aside className={styles['home-page__image-section']}>
                <img 
                    className={styles['home-page__assets-home-image']}
                    src={assetsHomeImage} 
                    alt="Assets home image" 
                    loading='lazy'
                />
            </aside>
        </main>
    );
}

export { Home };
