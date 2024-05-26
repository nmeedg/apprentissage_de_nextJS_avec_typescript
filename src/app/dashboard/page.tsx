import LineChart from './line-chart';
import { getTime } from '../_lib/get-time';

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <BarChart />
      <LineChart />
      <p>Il est {getTime()}</p>
    </div>
  );
}

function BarChart(): JSX.Element {
  return (
    <div>
      <h2>Bar-chart</h2>
    </div>
  );
}
