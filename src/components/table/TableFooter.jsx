import { NavLink, useLocation, useNavigate } from 'react-router-dom';

const TableFooter = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const oldPath = location.pathname;

  const term = (str) => {
    const lastChar = str.length === 1 ? 2 : +str.substr(str.length - 1) + 1;
    const newStr = str.substring(0, str.length - 1);
    return newStr + lastChar;
  };
  const newPath = term(oldPath);
  return (
    <div className='table-footer'>
      <button onClick={() => navigate(-1)} className='table-footer__column'>
        Назад
      </button>
      <div className='table-footer__column'>
        <NavLink to='/' className='table-footer__page'>
          1
        </NavLink>
        <NavLink to='/2' className='table-footer__page'>
          2
        </NavLink>
        <NavLink to='/3' className='table-footer__page'>
          3
        </NavLink>
        <NavLink to='/4' className='table-footer__page'>
          4
        </NavLink>
        <NavLink to='/5' className='table-footer__page'>
          5
        </NavLink>
      </div>
      <button
        onClick={() => navigate(newPath)}
        className='table-footer__column'
      >
        Далее
      </button>
    </div>
  );
};

export default TableFooter;
