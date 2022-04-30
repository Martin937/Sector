import React from 'react';
import { Outlet } from 'react-router-dom';
import InputSearch from '../components/InputSearch';

function Layout({ searchFilter, setSearchFilter }) {
  return (
    <div className='container'>
      <InputSearch
        searchFilter={searchFilter}
        setSearchFilter={setSearchFilter}
      />
      <main className='main'>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
