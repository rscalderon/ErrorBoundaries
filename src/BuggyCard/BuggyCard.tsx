import { PieChart } from '@mui/x-charts/PieChart';

function BuggyCard() {
  throw new Error('I broke');
  return (
    <>
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
          onItemClick={() => {
            throw new Error('I broke in a different way');
          }}
        />
      </div>
    </>
  );
}

export default BuggyCard;
