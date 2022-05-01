import React from 'react';
import { Outlet } from 'react-router-dom';
import InputSearch from '../components/InputSearch';
import TableFooter from '../components/table/TableFooter';
import TableHead from '../components/table/TableHead';

function Layout({
  searchFilter,
  setSearchFilter,
  sortPosts,
  isSortId,
  isSortTitle,
  isSortBody,
}) {
  return (
    <div className='container'>
      <main className='main'>
        <InputSearch
          searchFilter={searchFilter}
          setSearchFilter={setSearchFilter}
        />
        <TableHead
          sortPosts={sortPosts}
          isSortId={isSortId}
          isSortTitle={isSortTitle}
          isSortBody={isSortBody}
        />
        <Outlet />
        <TableFooter />
      </main>
    </div>
  );
}

export default Layout;
