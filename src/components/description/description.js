import React, { useState, useEffect } from 'react';
import FilmsServices from '@/services/films-services';
import SoundPlayer from '@/components/soundplayer';
import './description.scss';
import { useFilmsContext } from '@/components/films-provider/films-provider';

const filmsServices = new FilmsServices();

const Description = () => {
  const [img, setImg] = useState('');

  const {
    descriptionFilm: film,
  } = useFilmsContext();

  useEffect(() => {
    if (!film.id) {
      setImg('');
    }
  }, [film]);

  useEffect(() => {
    if (film.img) {
      filmsServices.getImage(film.img)
        .then((src) => {
          setImg(src);
        });
    }
  }, [film]);

  useEffect(() => {
    if (!film.img) {
      setImg('');
    }
  }, [img]);

  if (!img) {
    return (
      <div className="description">
        Послушайте саундтрек и выберете фильм из списка
      </div>
    );
  }

  return (
    <div className="description">
      <div className="description_top">
        <img src={img} alt={film.title} className="description_img" />
        <div className="description_right">
          <div className="description_title">{film.title}</div>
          <div className="description_smallTitle">{film.engTitle}</div>
          <SoundPlayer
            src={filmsServices.getSoundtrack(film.soundtrack)}
            layout="stacked"
          />
        </div>
      </div>
      <div className="description_desc">
        {film.desc}
      </div>
    </div>
  );
};

export default Description;
