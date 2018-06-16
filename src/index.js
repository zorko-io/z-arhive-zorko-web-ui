import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import createAppStore from './store';

const store = createAppStore();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
