import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@/components/list-item';
import './list.scss';

const List = ({ films }) => (
  <div className="films">
    {films.map((film) => (
      <ListItem
        key={film.id}
        film={film}
      />
    ))}
  </div>
);

List.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape([])).isRequired,
};

export default List;
