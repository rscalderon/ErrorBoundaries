import './App.css';
import Dashboard from '../Dashboard';
import { ErrorBoundary } from 'react-error-boundary';

function App() {
  return (
    <>
      <h1>Error Boundaries are Friends</h1>
      {/* Note: wrapping the entire app in an error boundary is not best-practice */}
      <ErrorBoundary fallback={<div>Oops! The whole dashboard crashed</div>}>
        <Dashboard />
      </ErrorBoundary>
    </>
  );
}

export default App;
