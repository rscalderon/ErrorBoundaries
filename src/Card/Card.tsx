import { PieChart } from '@mui/x-charts/PieChart';
import { Gauge } from '@mui/x-charts/Gauge';
import './Card.css';

function Card() {
  return (
    <div className='card'>
      {Math.random() > 0.3 ? (
        <PieChart
          series={[
            {
              data: [
                { id: 0, value: Math.random() * 20 },
                { id: 1, value: Math.random() * 20 },
                { id: 2, value: Math.random() * 20 },
              ],
            },
          ]}
          width={250}
          height={150}
        />
      ) : (
        <Gauge
          width={100}
          height={100}
          value={Math.round(Math.random() * 100)}
        />
      )}
    </div>
  );
}

export default Card;
