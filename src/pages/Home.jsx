import Loader from '../components/Loader';
import TableRow from '../components/table/TableRow';

function Home({ data = [] }) {
  const tableRow = data.map((row) => (
    <TableRow
      key={row.id}
      title={row.title}
      body={row.body}
      number={row.id}
      // number={data.indexOf(row) + 1}
    />
  ));
  return <div className='table'>{!data.length ? <Loader /> : tableRow}</div>;
}
export default Home;
