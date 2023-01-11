import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import Main from './layout/main';
import {BrowserRouter as Router} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root'));

const players = ['Pelé', 'Maradona', 'Messi', 'Rivaldo' ]
export const PlayersContext = createContext()

const persited = persistStore(store)


root.render(
  <React.StrictMode>
    <PlayersContext.Provider value={{players}}>
      <Provider store={store}>
        <PersistGate loading={<div>Loading...</div>} persistor={persited}>
          <Router>
            <Main />
          </Router>
        </PersistGate>
      </Provider>
    </PlayersContext.Provider>
  </React.StrictMode>
);