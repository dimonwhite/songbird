import React from 'react';
import PropTypes from 'prop-types';
import './win-screen.scss';
import { useFilmsContext } from '@/components/films-provider/films-provider';

import winImg from './assets/img/win.png';

const WinScreen = ({ score }) => {
  const {
    newGame,
  } = useFilmsContext();

  const img = score >= 30 ? <img className="winScreen_img" src={winImg} alt="Композитор" /> : '';

  return (
    <div className="winScreen">
      <div className="winScreen_title">
        Поздравляем!
      </div>
      <div className="winScreen_text">
        Вы прошли викторину и набрали
        {' '}
        {score}
        {' '}
        из 30 возможных баллов!
      </div>
      {img}
      <button className="nextBtn" type="button" onClick={newGame}>Новая игра</button>
    </div>
  );
};

WinScreen.propTypes = {
  score: PropTypes.number.isRequired,
};

export default WinScreen;
