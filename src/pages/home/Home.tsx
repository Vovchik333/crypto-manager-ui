import './Home.css'

const Home = () => {
    return (
        <main className="home-content">
            <section className="home-section">
                <span className="roboto-black">Meet the most convenient and useful crypto manager</span>
            </section>
            <section className="home-section roboto-regular">
                <span>Gain good investment management experience. The app has many analytical tools that will help you monitor the state of your crypto portfolio.</span>
                <button className='small-btn'>Sign in</button>
            </section>
        </main>
    );
}

export { Home };