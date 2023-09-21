import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="px-4 py-4 text-xs">
      <p className="max">
        <span>Copyright &copy; {year} - </span>
        <a href="https://ichessclub.org" target="_blank" rel="noopener noreferrer">
          International Chess Club
        </a>
      </p>
    </footer>
  );
}

export default Footer;
