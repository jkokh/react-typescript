import * as React from 'react';
import * as ReactDOM from 'react-dom';

import '../sass/index.sass';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

import App from './components/App.tsx';

ReactDOM.render(
    <App />,
    document.getElementById('root')
);