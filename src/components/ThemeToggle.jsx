import { useState, useEffect } from 'react';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('minimal');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'minimal';
    setTheme(savedTheme);
    document.body.className = savedTheme;
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'minimal' ? 'classic' : 'minimal';
    setTheme(newTheme);
    document.body.className = newTheme;
    localStorage.setItem('theme', newTheme);
  };

  return (
    <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
      {theme === 'minimal' ? 'Classic' : 'Minimal'}
    </button>
  );
};

export default ThemeToggle;
