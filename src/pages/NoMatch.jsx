import { Link } from 'react-router-dom';

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <button className=' btn'>
        <Link to='/'>Go to the home page</Link>
      </button>
    </div>
  );
}

export default NoMatch;
