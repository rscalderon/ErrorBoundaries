import { ErrorBoundary } from 'react-error-boundary';

import BuggyCard from '../BuggyCard';
import Card from '../Card';

import './Dashboard.css';

function Dashboard() {
  return (
    <div className='dashboard'>
      <Card />
      <Card />
      <ErrorBoundary
        fallback={<div className='fallbackUI'>Oops! This card crashed</div>}
      >
        <BuggyCard />
      </ErrorBoundary>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <ErrorBoundary
        fallback={<div className='fallbackUI'>Oops! This card crashed</div>}
      >
        <BuggyCard />
      </ErrorBoundary>
      <Card />
    </div>
  );
}

export default Dashboard;
