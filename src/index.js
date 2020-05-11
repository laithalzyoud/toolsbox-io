import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import PDF from './components/pdf';
import OCR from './components/ocr';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>

  <Router>
  <Route path="/" render={props => {
    const [subdomain] = window.location.hostname.split('.');
    console.log(subdomain)
    if (subdomain === 'pdf') return <PDF {...props}/>;
    if (subdomain === 'ocr') return <OCR {...props}/>;
    return <App />;
  }}/>
</Router>
</React.StrictMode>,

document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
