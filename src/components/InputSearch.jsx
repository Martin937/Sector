import search from '../icons/search.svg';
const InputSearch = ({ searchFilter, setSearchFilter }) => {
  return (
    <div className='search'>
      <input
        type='search'
        name='search'
        id='search'
        className='search__input'
        placeholder='Поиск'
        value={searchFilter}
        onChange={(e) => setSearchFilter(e.target.value)}
      />
      <img
        className='search__icon'
        src={search}
        alt='search'
        onClick={(event) => console.log('click of img', event.currentTarget)}
      />
    </div>
  );
};

export default InputSearch;
