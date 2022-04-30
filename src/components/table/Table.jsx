import TableFooter from './TableFooter';
import TableHead from './TableHead';
import TableRow from './TableRow';

const Table = ({ data = {}, sortPosts, isSortId, isSortTitle, isSortBody }) => {
  const tableRow =
    data.length > 0 ? (
      data.map((row) => (
        <TableRow
          key={row.id}
          title={row.title}
          body={row.body}
          number={row.id}
          // number={data.indexOf(row) + 1}
        />
      ))
    ) : (
      <>
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
      </>
    );

  return (
    <div className='table'>
      <TableHead
        sortPosts={sortPosts}
        isSortId={isSortId}
        isSortTitle={isSortTitle}
        isSortBody={isSortBody}
      />

      {tableRow}

      <TableFooter />
    </div>
  );
};

export default Table;
