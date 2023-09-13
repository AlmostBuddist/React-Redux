import './assets/App.css';

import React, { FC } from 'react';

import { Counter } from './components';

const App: FC = () => {
  return (
    <div className="App">
      <Counter />
      <p>Hello World!</p>
    </div>
  );
};

export default App;
