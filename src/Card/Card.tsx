import { PieChart } from '@mui/x-charts/PieChart';
import './Card.css';

function Card() {
  return (
    <div className='card'>
      <PieChart
        series={[
          {
            data: [
              { id: 0, value: 10 },
              { id: 1, value: 15 },
              { id: 2, value: 20 },
            ],
          },
        ]}
        width={250}
        height={150}
      />
    </div>
  );
}

export default Card;
