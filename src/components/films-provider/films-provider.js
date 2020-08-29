import React, {
  useContext, useEffect, useState, useCallback,
} from 'react';
import FilmsServices from '@/services/films-services';
import correct from './assets/sounds/correct.mp3';
import error from './assets/sounds/error.mp3';
import win from './assets/sounds/win.mp3';

const FilmsContext = React.createContext();

export const useFilmsContext = () => useContext(FilmsContext);

const filmsServices = new FilmsServices();
const films = [];
const audio = new Audio();

const playAudio = (src) => {
  audio.src = src;
  audio.play();
};

// eslint-disable-next-line react/prop-types
const FilmsProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [isGame, setIsGame] = useState(false);
  const [score, setScore] = useState(0);
  const [roundScore, setRoundScore] = useState(5);
  // eslint-disable-next-line no-unused-vars
  const [genre, setGenre] = useState(0);
  const [currentFilms, setCurrentFilms] = useState([]);
  const [questionFilm, setQuestionFilm] = useState({});
  const [descriptionFilm, setDescriptionFilm] = useState({});

  const updateCurrentFilms = () => {
    const randomFilms = films[genre].sort(() => Math.random() - 0.5).slice(0, 6);
    setCurrentFilms(randomFilms);
  };

  const updateFilms = async () => {
    const filmsResponse = await filmsServices.getFilms();
    films.push(...filmsResponse);
    updateCurrentFilms();
  };

  const nextRound = useCallback(() => {
    setGenre((prev) => {
      if (prev >= 5) {
        console.log('Игра закончена', score);
        playAudio(win);
        setLoading(true);
        return prev;
      }
      return prev + 1;
    });
  }, []);

  const checkAnswer = (film) => {
    setDescriptionFilm(film);
    if (film.id === questionFilm.id && isGame) {
      setIsGame(false);
      setSuccess(true);
      setScore((prev) => prev + roundScore);
      setRoundScore(5);
      playAudio(correct);
      return 'success';
    }
    if (isGame) {
      setRoundScore((prev) => prev - 1);
      playAudio(error);
      return 'error';
    }
    return '';
  };

  useEffect(() => {
    updateFilms()
      .then(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (films.length) {
      updateCurrentFilms();
    }
  }, [genre]);

  useEffect(() => {
    if (currentFilms.length) {
      setQuestionFilm(currentFilms[Math.floor((Math.random() * currentFilms.length))]);
      setIsGame(true);
      setDescriptionFilm({});
    }
  }, [currentFilms]);

  useEffect(() => {
    setSuccess(false);
  }, [questionFilm]);

  return (
    <FilmsContext.Provider value={{
      loading,
      success,
      score,
      genre,
      currentFilms,
      questionFilm,
      isGame,
      descriptionFilm,
      checkAnswer,
      nextRound,
    }}
    >
      { children }
    </FilmsContext.Provider>
  );
};

export default FilmsProvider;
