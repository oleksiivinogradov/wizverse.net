import './Universe.css';

const universeData = [
    {
        id: 1,
        title: 'Main Game Platform',
        description: 'These are standard platforms accessible to all players for engaging in battles.',
        image: '/assets/main-platform-hd.png',
        link: '#gameplay'
    },
    {
        id: 2,
        title: "Investor's Platforms",
        description: "Purchased as NFTs by investors, these platforms allow owners to set entry fees (Wizverse Pass) and generate passive income from player battles held on their arenas.",
        image: '/assets/images/Square1_4.png',
        link: '#wizards'
    },
    {
        id: 3,
        title: 'Sand Box Platform',
        description: 'Designed specifically for new players, these platforms help beginners learn and practice the game\'s mechanics.',
        image: '/assets/images/Square2_4.png',
        link: '#game-attributes'
    }
];

const Universe = () => {
    return (
        <section id="universe" className="section universe-section">
            <div className="container">
                <div className="section-title">
                    <h2 className="text-gradient">Our universe</h2>
                    <p className="universe-subtitle">
                        Wizverse is a cosmic universe where players navigate between floating battle platforms in space
                    </p>
                </div>

                <div className="grid grid-3 universe-grid">
                    {universeData.map((platform) => (
                        <a
                            key={platform.id}
                            href={platform.link}
                            className="universe-card card"
                        >
                            <div className="universe-card-image-wrapper">
                                <img
                                    src={platform.image}
                                    alt={platform.title}
                                    className="universe-card-image"
                                />
                            </div>
                            <div className="universe-card-content">
                                <h3>{platform.title}</h3>
                                <p>{platform.description}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Universe;
