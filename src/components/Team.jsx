import './Team.css';

const teamMembers = [
    {
        id: 1,
        name: 'Khil Margarita',
        role: 'The Founder at Wizverse',
        image: '/assets/khil-margarita.jpeg'
    },
    {
        id: 2,
        name: 'Denis Leschinsky',
        role: 'Project Manager at Wizverse',
        image: '/assets/denis-leschinsky.png'
    },
    {
        id: 3,
        name: 'Alice Zakrevsky',
        role: 'Business Development Manager',
        image: '/assets/alice-zakrevsky.png'
    }
];

const Team = () => {
    return (
        <section id="team" className="section team-section">
            <div className="container">
                <div className="section-title">
                    <h2 className="text-gradient">Our Team</h2>
                </div>

                <div className="grid grid-3 team-grid">
                    {teamMembers.map((member) => (
                        <div key={member.id} className="team-card card">
                            <div className="team-card-image-wrapper">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="team-card-image"
                                />
                            </div>
                            <div className="team-card-content">
                                <h3>{member.name}</h3>
                                <p className="team-card-role">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
