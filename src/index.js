import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Clients from './clients.json'; // This is json file

import App from './App';
import registerServiceWorker from './registerServiceWorker';

function clients(state = Clients) { // Clients is array data
    return state
}

const store = createStore(clients, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); // This is reducers

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
