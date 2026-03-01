import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-section">
                    <h4>Contacts</h4>
                    <a href="mailto:margarita@wizverse.net">margarita@wizverse.net</a>
                </div>

                <div className="footer-section">
                    <h4>Menu</h4>
                    <ul>
                        <li><a href="#home">Main</a></li>
                        <li><a href="https://app.wizverse.net/" target="_blank" rel="noopener noreferrer">Play game</a></li>
                        <li><a href="#about">About us</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Links</h4>
                    <ul>
                        <li><a href="https://x.com/wizverse_game" target="_blank" rel="noopener noreferrer">X (Twitter)</a></li>
                        <li><a href="https://t.me/wizverse_group" target="_blank" rel="noopener noreferrer">Telegram</a></li>
                        <li><a href="https://wizverse-1.gitbook.io/wizverse" target="_blank" rel="noopener noreferrer">WhitePaper</a></li>
                        <li><a href="https://dev.wizverse.net/" target="_blank" rel="noopener noreferrer">Play game</a></li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} Wizverse. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
