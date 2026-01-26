import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const handleNewsClick = () => {
    navigate('/news');
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePeopleClick = () => {
    navigate('/people');
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTeachingClick = () => {
    navigate('/teaching');
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePublicationsClick = () => {
    navigate('/publications');
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSoftwareClick = () => {
    navigate('/software');
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContactClick = () => {
    navigate('/contact');
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogoClick = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAboutClick = () => {
    navigate('/about');
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
          <h1>Jooyoung Lee</h1>
          <p className="subtitle">Biostatistics & Lifetime Data Analysis Lab</p>
        </div>

        <button
          className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <button onClick={handleAboutClick} className={location.pathname === '/about' ? 'active' : ''}>About</button>
          <button onClick={handleNewsClick} className={location.pathname === '/news' ? 'active' : ''}>News</button>
          <button onClick={handlePeopleClick} className={location.pathname === '/people' ? 'active' : ''}>People</button>
          <button onClick={handleTeachingClick} className={location.pathname === '/teaching' ? 'active' : ''}>Teaching</button>
          <button onClick={handlePublicationsClick} className={location.pathname === '/publications' ? 'active' : ''}>Publications</button>
          <button onClick={handleSoftwareClick} className={location.pathname === '/software' ? 'active' : ''}>Software</button>
          <button onClick={handleContactClick} className={location.pathname === '/contact' ? 'active' : ''}>Contact</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
