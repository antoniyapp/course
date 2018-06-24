import { BrowserRouter as Router } from 'react-router-dom';

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import OnlineShop from './app.js';
import app from "../app.css";


ReactDOM.render(
    <Router>
    <OnlineShop url='http://localhost:3000/api/products'/>
    </Router> ,
document.getElementById('root'));