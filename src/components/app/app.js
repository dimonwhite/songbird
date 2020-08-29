import React, { useEffect } from 'react';

import { useFilmsContext } from '@/components/films-provider/films-provider';
import Header from '@/components/header';
import CurrentQuestion from '@/components/current-question';
import List from '@/components/list';
import Spinner from '@/components/spinner';
import Description from '@/components/description';

import './app.scss';

const App = () => {
  const {
    loading,
    score,
    genre,
    currentFilms,
    isGame,
    nextRound,
  } = useFilmsContext();

  useEffect(() => {
    console.log(123);
  }, [nextRound]);

  const content = loading ? <Spinner /> : (
    <>
      <CurrentQuestion />

      <button className="nextBtn" type="button" onClick={nextRound} disabled={isGame}>Следующий раунд</button>

      <div className="app_bottom">
        <List films={currentFilms} />
        <Description />
      </div>
    </>
  );

  return (
    <div className="container">
      <Header score={score} genre={genre} />
      {content}
    </div>
  );
};

export default App;
