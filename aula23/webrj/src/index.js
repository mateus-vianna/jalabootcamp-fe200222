import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import Main from './layout/main';
import {BrowserRouter as Router} from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));

const players = ['Pelé', 'Maradona', 'Messi', 'Rivaldo' ]
export const PlayersContext = createContext()


root.render(
  <React.StrictMode>
    <PlayersContext.Provider value={{players}}>
    <Router>
      <Main />
    </Router>
    </PlayersContext.Provider>
  </React.StrictMode>
);