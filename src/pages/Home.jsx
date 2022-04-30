import Loader from '../components/Loader';
import Table from '../components/table/Table';

function Home({ data, sortPosts, isSortId, isSortTitle, isSortBody }) {
  return (
    <>
      {!data ? (
        <Loader />
      ) : (
        <Table
          data={data}
          sortPosts={sortPosts}
          isSortId={isSortId}
          isSortTitle={isSortTitle}
          isSortBody={isSortBody}
        />
      )}
    </>
  );
}
export default Home;
