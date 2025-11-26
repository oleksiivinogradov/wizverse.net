import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="navbar-logo">
          <img src="/assets/images/WizverseTitle.png" alt="Wizverse" className="logo-image" />
        </div>

        <button className="navbar-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Main</a></li>
          <li><a href="https://wizverse-1.gitbook.io/wizverse" target="_blank" rel="noopener noreferrer">Whitepaper</a></li>
          <li><a href="#team" onClick={() => setIsMenuOpen(false)}>Team</a></li>
          <li><a href="https://dev.wizverse.net/" target="_blank" rel="noopener noreferrer">Play game</a></li>
          <li><a href="#contacts" onClick={() => setIsMenuOpen(false)}>Contacts</a></li>
          <li><a href="#blog" onClick={() => setIsMenuOpen(false)}>Blog</a></li>
        </ul>

        <a href="https://skale.wizverse.net/" className="btn btn-primary navbar-cta" target="_blank" rel="noopener noreferrer">
          Play Now
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
