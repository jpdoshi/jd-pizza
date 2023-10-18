/* @refresh reload */
import { render } from 'solid-js/web';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './index.css';
import { Router, Route, Routes } from '@solidjs/router';

import App from './App';
import Header from './components/Header';
import Menu from './components/Menu';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(
  () => (
    <Router>
      <Header />
      <Routes>
        <Route path="/" component={App} />
        <Route path="/menu" component={Menu} />
      </Routes>
    </Router>
  ),
  root
);
