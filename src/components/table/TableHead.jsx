import arrow from '../../icons/arrow.svg';

const TableHead = ({ sortPosts, isSortId, isSortTitle, isSortBody }) => {
  // const imgStyle = { transform: 'rotate(180deg)' };
  const imgStyleId = isSortId ? { transform: 'rotate(180deg' } : null;
  const imgStyleTitle = isSortTitle ? { transform: 'rotate(180deg' } : null;
  const imgStyleBody = isSortBody ? { transform: 'rotate(180deg' } : null;
  return (
    <div className='table-head'>
      <div className='table-head__column'>
        <span>ID</span>
        <button id='number' className='btn' onClick={sortPosts}>
          <img style={imgStyleId} src={arrow} alt='arrow' />
        </button>
      </div>
      <div className='table-head__column'>
        <span>Заголовок</span>
        <button id='title' className='btn' onClick={sortPosts}>
          <img style={imgStyleTitle} src={arrow} alt='arrow' />
        </button>
      </div>
      <div className='table-head__column'>
        <span>Описание</span>
        <button id='body' className='btn' onClick={sortPosts}>
          <img style={imgStyleBody} src={arrow} alt='arrow' />
        </button>
      </div>
    </div>
  );
};

export default TableHead;
