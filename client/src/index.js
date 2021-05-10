import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
  domain="booking-sys.eu.auth0.com"
  clientId="e5i7jdsX9dVVyXhloH5aiZj5kdgdN1e2"
  redirectUri={'http://localhost/bookings'}>
  <App />
  </Auth0Provider>,
  document.getElementById('root')
);
