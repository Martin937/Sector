const numbers = [2, 3, 4, 5];

const numberPage = numbers.map((num) => (
  <div className='table-footer__page' key={num}>
    {num}
  </div>
));

const TableFooter = () => {
  return (
    <div className='table-footer'>
      <div className='table-footer__column'>Назад</div>
      <div className='table-footer__column'>
        <div className='table-footer__page active'>1</div>
        {numberPage}
      </div>
      <div className='table-footer__column'>Далее</div>
    </div>
  );
};

export default TableFooter;
