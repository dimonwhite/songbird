import React, { useState } from 'react';

import Header from '@/components/header';
import CurrentQuestion from '@/components/current-question';

import './app.scss';

const App = () => {
  const [score, setScore] = useState(0);

  return (
    <>
      <Header score={score} />
      <CurrentQuestion />
      <button className="btn btn-danger" type="button" onClick={() => setScore((prev) => prev + 1)}>Score</button>
    </>
  );
};

export default App;
