import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';
import NotFound from './page/NotFound';
import Markect from './page/Markect';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='markect' element={<Markect />} />
        <Route path='*' element={<Navigate to='/not-found' />} />
        <Route path='/not-found' element={<NotFound />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
