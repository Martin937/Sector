import Loader from '../components/Loader';
import TableRow from '../components/table/TableRow';

function nextPage2({ data = [] }) {
  const tableRow = data.map((row) => (
    <TableRow
      key={row.id}
      title={row.title}
      body={row.body}
      number={row.id}
      // number={data.indexOf(row) + 1}
    />
  ));
  return (
    <div className='table'>
      <h2>Page-2</h2>
      {!data.length ? <Loader /> : tableRow}
    </div>
  );
}
export default nextPage2;
