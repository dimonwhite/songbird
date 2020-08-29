import React from 'react';
import './nav.scss';
import PropTypes from 'prop-types';

const genres = [
  'Сериалы',
  'Мультфильмы',
  'Фантастика',
  'Драма',
  'Комедия',
  'Боевик',
];

const Nav = ({ genre }) => {
  const listItems = genres.map((item, i) => {
    const className = genre === i ? 'nav_list_item active' : 'nav_list_item';

    // eslint-disable-next-line react/no-array-index-key
    return <li className={className} key={i}>{item}</li>;
  });

  return (
    <nav className="nav">
      <ul className="nav_list">
        {listItems}
      </ul>
    </nav>
  );
};

Nav.propTypes = {
  genre: PropTypes.number.isRequired,
};

export default Nav;
