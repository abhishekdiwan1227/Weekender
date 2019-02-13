import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import configureStore from './store/configureStore';
import * as ReactRedux from 'react-redux';
import Weekender from './weekender/Weekender';
import * as serviceWorker from './serviceWorker';

var store = configureStore();

ReactDOM.render(
    <ReactRedux.Provider store={store}>
        <Weekender />
    </ReactRedux.Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
