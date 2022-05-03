import { Link, NavLink, useLocation } from 'react-router-dom';

const TableFooter = ({ nextData }) => {
  const location = useLocation();

  const term = (str) => {
    const prevtLastChar = str === '/1' ? '' : +str.substr(str.length - 1) - 1;
    const nextLastChar = str.length === 1 ? 1 : +str.substr(str.length - 1) + 1;
    const newStr = str.substring(0, str.length - 1);
    const prev = {
      pathname: newStr + prevtLastChar,
    };
    const next = {
      pathname: newStr + nextLastChar,
    };
    return [prev, next];
  };
  const [prev, next] = term(location.pathname);

  return (
    <div className='table-footer'>
      <Link
        onClick={nextData}
        to={prev}
        className='table-footer__column'
        id='prevLink'
      >
        Назад
      </Link>
      <div className='table-footer__column'>
        <NavLink onClick={nextData} to='/' className='table-footer__page'>
          1
        </NavLink>
        <NavLink onClick={nextData} to='/1' className='table-footer__page'>
          2
        </NavLink>
        <NavLink onClick={nextData} to='/2' className='table-footer__page'>
          3
        </NavLink>
        <NavLink onClick={nextData} to='/3' className='table-footer__page'>
          4
        </NavLink>
        <NavLink onClick={nextData} to='/4' className='table-footer__page'>
          5
        </NavLink>
      </div>
      <Link
        onClick={nextData}
        to={next}
        className='table-footer__column'
        id='nextLink'
      >
        Далее
      </Link>
    </div>
  );
};

export default TableFooter;
