import './Guides.css';

const guidesData = [
    {
        id: 1,
        title: 'Gameplay',
        description: 'Players can purchase a wizard character and a magic wand to enter various game modes, including Solo, Multiplayer, and Team Battles. Players compete in a shared arena, using magic spells to eliminate opponents while avoiding attacks, with the last standing player or team winning the prize pool.',
        link: 'https://wizverse-1.gitbook.io/wizverse/overview/quickstart',
        icon: '🎮'
    },
    {
        id: 2,
        title: 'Rewards',
        description: 'In Multiplayer and Team Battles, 45% of the prize pool goes to the winning player or team, 40% to the owner of the battle arena, and 15% is retained by the platform. In Solo Mode, the winner receives 1% of 40% of the total NFT purchase pool accumulated over time.',
        link: 'https://wizverse-1.gitbook.io/wizverse/overview/quickstart',
        icon: '💰'
    },
    {
        id: 3,
        title: 'Attributes',
        description: 'In Wizverse, each wizard has core attributes like HP, ATK, DEF, SPD, EXP, SCORE, HP.RE & HP.LE, which influence their performance in battles. Players can enhance these stats through character selection and weapon upgrades. For example, the characters Fynn and Fae provide a +5 boost to all attributes.',
        link: 'https://wizverse-1.gitbook.io/wizverse/overview/character-attributes',
        icon: '⚡'
    }
];

const Guides = () => {
    return (
        <section id="guides" className="section guides-section">
            <div className="container">
                <div className="section-title">
                    <h2 className="text-gradient">Helpful Guides</h2>
                </div>

                <div className="grid grid-3 guides-grid">
                    {guidesData.map((guide) => (
                        <div key={guide.id} className="guide-card card">
                            <div className="guide-icon">{guide.icon}</div>
                            <h3>{guide.title}</h3>
                            <p>{guide.description}</p>
                            <a
                                href={guide.link}
                                className="btn btn-outline btn-small"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Read More
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Guides;
