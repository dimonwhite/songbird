import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useFilmsContext } from '@/components/films-provider/films-provider';
import './list-item.scss';

const ListItem = ({ film }) => {
  const [statusClass, setStatusClass] = useState('films_item_status');
  const { checkAnswer } = useFilmsContext();

  const clickHandler = () => {
    setStatusClass(`films_item_status ${checkAnswer(film)}`);
  };

  const { title } = film;

  return (
    <button type="button" className="films_item" onClick={clickHandler}>
      <span className={statusClass} />
      <div className="films_item_text">{title}</div>
    </button>
  );
};

ListItem.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
  }).isRequired,
};

export default ListItem;