import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ErrorBoundary } from 'react-error-boundary';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* Note: wrapping the entire app in an error boundary like this is NOT best-practice */}
    {/* <ErrorBoundary fallback={<div>Oops! The whole app crashed</div>}> */}
    <App />
    {/* </ErrorBoundary> */}
  </React.StrictMode>
);
