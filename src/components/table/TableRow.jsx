const TableRow = ({ title, body, number }) => {
  return (
    <>
      <div className='table-row'>
        <div className='table-row__column'>{number}</div>
        <div className='table-row__column'>{title}</div>
        <div className='table-row__column'>{body}</div>
      </div>
    </>
  );
};

export default TableRow;
