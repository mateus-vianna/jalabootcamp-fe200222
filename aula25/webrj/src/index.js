import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import Main from './layout/main';
import {BrowserRouter as Router} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store';


const root = ReactDOM.createRoot(document.getElementById('root'));

const players = ['Pelé', 'Maradona', 'Messi', 'Rivaldo' ]
export const PlayersContext = createContext()


root.render(
  <React.StrictMode>
    <PlayersContext.Provider value={{players}}>
      <Provider store={store}>
        <Router>
          <Main />
        </Router>
      </Provider>
    </PlayersContext.Provider>
  </React.StrictMode>
);