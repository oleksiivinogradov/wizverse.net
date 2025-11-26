import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-background">
                <div className="hero-cosmic-effects"></div>
            </div>

            <div className="container hero-content">
                <div className="hero-text animate-fade-in-up">
                    <h1 className="hero-title">Duel with magic</h1>
                    <p className="hero-subtitle">MULTIPLAYER WIZARD GAME BUILT ON BLOCKCHAIN</p>
                    <a href="https://skale.wizverse.net/" className="btn btn-primary btn-large" target="_blank" rel="noopener noreferrer">
                        Play game
                    </a>
                </div>

                <div className="hero-description">
                    <div className="hero-description-content">
                        <div className="gameplay-video-container">
                            <video
                                className="gameplay-video"
                                crossOrigin="anonymous"
                                playsInline
                                preload="auto"
                                muted
                                loop
                                autoPlay
                                src="/gameplay-preview.mp4"
                            />
                            <div className="video-overlay"></div>
                        </div>
                        <div className="hero-description-text">
                            <h2 className="text-gradient">Unleash Your Magic</h2>
                            <p>
                                Enter Wizverse, a dynamic multiplayer wizard battle game! Cast powerful spells,
                                outsmart rivals, and prove you're the ultimate mage in thrilling magical duels.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero-scroll-indicator">
                <div className="scroll-arrow"></div>
            </div>
        </section>
    );
};

export default Hero;
