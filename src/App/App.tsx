import './App.css';
import Dashboard from '../Dashboard';
import { ErrorBoundary } from 'react-error-boundary';

function App() {
  return (
    <>
      <h1>Error Boundaries in Practice</h1>
      <ErrorBoundary fallback={<div>Oops! The whole dashboard crashed</div>}>
        <Dashboard />
      </ErrorBoundary>
    </>
  );
}

export default App;
