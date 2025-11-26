import './Wizards.css';

const wizardsData = [
    {
        id: 1,
        name: 'Lior',
        description: 'Fearless battle mage with powerful magic, making every fight exciting.',
        image: '/assets/images/LiorCard2.png'
    },
    {
        id: 2,
        name: 'Nia',
        description: 'A brave fire mage, burning enemies and energizing her team with passion.',
        image: '/assets/images/NiaCard2.png'
    },
    {
        id: 3,
        name: 'Fynn',
        description: 'A quick-thinking wizard, using fast, strong spells to outplay enemies and help his team.',
        image: '/assets/images/FynnCard4.png'
    },
    {
        id: 4,
        name: 'Fae',
        description: 'A shadowy sorceress with dark magic, confusing enemies and staying in control.',
        image: '/assets/images/FaeCard2.png'
    }
];

const Wizards = () => {
    return (
        <section id="wizards" className="section wizards-section">
            <div className="container">
                <div className="section-title">
                    <h2 className="text-gradient">Wizards of universe</h2>
                    <a
                        href="https://wizverse-1.gitbook.io/wizverse/overview/wizards"
                        className="btn btn-outline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View All Wizards
                    </a>
                </div>

                <div className="grid grid-4 wizards-grid">
                    {wizardsData.map((wizard) => (
                        <div key={wizard.id} className="wizard-card card">
                            <div className="wizard-card-image-wrapper">
                                <img
                                    src={wizard.image}
                                    alt={wizard.name}
                                    className="wizard-card-image"
                                />
                            </div>
                            <div className="wizard-card-content">
                                <h3>{wizard.name}</h3>
                                <p>{wizard.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Wizards;
