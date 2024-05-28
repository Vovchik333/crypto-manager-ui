import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className='main-footer'>
            <span className='author-info roboto-regular'>
                Created by <a href="https://github.com/Vovchik333" target='_blank'>Volodymyr Potapenko</a>
            </span>
        </footer>
    );
}

export { Footer };