import React, { useState, useEffect } from 'react';
import FilmsServices from '@/services/films-services';
import SoundPlayer from '@/components/soundplayer';
import { useFilmsContext } from '@/components/films-provider/films-provider';
import defaultImg from './assets/img/poster.jpg';
import './current-question.scss';

const filmsServices = new FilmsServices();

// eslint-disable-next-line react/prop-types,no-unused-vars
const CurrentQuestion = () => {
  const {
    success,
    questionFilm: { title, img, soundtrack },
  } = useFilmsContext();

  const [filmImg, setFilmImg] = useState(defaultImg);
  const [filmTitle, setFilmTitle] = useState('');
  const filmSoundtrack = filmsServices.getSoundtrack(soundtrack);

  useEffect(() => {
    if (success) {
      filmsServices.getImage(img)
        .then((src) => {
          setFilmImg(src);
        });
      setFilmTitle(title);
    } else {
      setFilmImg(defaultImg);
      setFilmTitle('');
    }
  }, [success]);

  useEffect(() => {
    if (!success) {
      setFilmImg(defaultImg);
    }
  }, [filmImg]);

  return (
    <div className="question">
      <img src={filmImg} alt={filmTitle} className="question_img" />

      <div className="question_right">
        <div className="question_title">{filmTitle || '******'}</div>
        <div className="question_sound">
          <SoundPlayer
            src={filmSoundtrack}
            stop={success}
            layout="horizontal-reverse"
          />
        </div>
      </div>
    </div>
  );
};

export default CurrentQuestion;
