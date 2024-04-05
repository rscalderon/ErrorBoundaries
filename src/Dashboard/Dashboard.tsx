import BuggyCard from '../BuggyCard';
import Card from '../Card';
import './Dashboard.css';
import { ErrorBoundary } from 'react-error-boundary';

function Dashboard() {
  return (
    <div className='dashboard'>
      <Card />
      <Card />
      <ErrorBoundary
        fallback={
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            Oops! This card crashed
          </div>
        }
      >
        <BuggyCard />
      </ErrorBoundary>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <ErrorBoundary
        fallback={
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            Oops! This card crashed
          </div>
        }
      >
        <BuggyCard />
      </ErrorBoundary>
    </div>
  );
}

export default Dashboard;
