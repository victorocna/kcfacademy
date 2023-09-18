import React from 'react';

const TopHeader = () => (
  <div className="flex px-4 py-1 top-bar">
    <ul className="max top-header-items">
      <a href="https://ichessclub.org/contact" target="_blank" rel="noopener noreferrer">
        <li>
          <i className="fas fa-envelope" />
          <span>Contact</span>
        </li>
      </a>
      <a href="https://www.facebook.com/ichessclub.ro/" target="_blank" rel="noopener noreferrer">
        <li>
          <i className="fab fa-facebook" />
          <span>Facebook</span>
        </li>
      </a>
      <a href="https://ichessclub.org" target="_blank" rel="noopener noreferrer">
        <li>
          <i className="fa fa-university" />
          <span>Website</span>
        </li>
      </a>
    </ul>
  </div>
);

export default TopHeader;
