import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className='footer'>
            <span 
                className='footer__author-info'
            >Created by <a className='footer__author-info-link' href="https://github.com/Vovchik333" target='_blank'>Volodymyr Potapenko</a>
            </span>
        </footer>
    );
}

export { Footer };