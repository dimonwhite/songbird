import React from 'react';
import PropTypes from 'prop-types';
import './header.scss';
import Nav from '@/components/nav';
import logo from './assets/img/logo.svg';

const Header = ({ score }) => (
  <header className="header container">
    <div className="header_top">
      <a href="/" className="logo">
        <img className="logo_img" alt="SongBird" src={logo.url} />
      </a>

      <div className="score">
        Score:
        {' '}
        { score }
      </div>
    </div>
    <Nav />
  </header>
);

Header.propTypes = {
  score: PropTypes.number.isRequired,
};

export default Header;
