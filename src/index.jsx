/* @refresh reload */
import { render } from 'solid-js/web';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './index.css';
import { Router, Route, Routes } from '@solidjs/router';

import Home from './Home.jsx';
import Menu from './Menu.jsx';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(
  () => (
    <Router>
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/menu" component={Menu} />
      </Routes>
    </Router>
  ),
  root
);
