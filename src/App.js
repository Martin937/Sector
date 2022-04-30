import React, { useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom";
import getAllPosts from "./api/api";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import NoMatch from "./pages/NoMatch";
import UsersProfile from "./pages/UsersProfile";


function App() {
  const [data, setData] = useState([]);
  const [isSortId, setIsSortId] = useState(false);
  const [isSortTitle, setIsSortTitle] = useState(false);
  const [isSortBody, setIsSortBody] = useState(false);
  const [searchFilter, setSearchFilter] = useState('')
  const [searchResults, setSearchResults] = useState([]);



  useEffect(() => {
    const newData = data.slice();
    const results = newData.filter(post => post.title.toLowerCase().includes(searchFilter.toLowerCase()))
    setSearchResults(results);
    console.log(searchResults);
  }, [searchFilter]);

  useEffect(() => {
    getAllPosts().then((data) => {
      setData(data);
    });
  }, []);

  const sortPosts = (event) => {
    const target = event.currentTarget.id;
    const newArray = data.slice();
    if (target === "number") {
      newArray.sort((a, b) => (isSortId) ? a.id - b.id : b.id - a.id);
      setData(newArray);
      setIsSortId(!isSortId)
    } else if (target === "title") {
      newArray.sort((a, b) => {
        if (isSortTitle) {
          return (a.title.toLowerCase() < b.title.toLowerCase()) ? -1 : 1
        } else {
          return (a.title.toLowerCase() < b.title.toLowerCase()) ? 1 : -1
        }
      });
      setData(newArray);
      setIsSortTitle(!isSortTitle)
    } else {
      newArray.sort((a, b) => {
        if (isSortBody) {
          return (a.body.toLowerCase() < b.body.toLowerCase()) ? -1 : 1
        } else {
          return (a.body.toLowerCase() < b.body.toLowerCase()) ? 1 : -1
        }
      });
      setData(newArray);
      setIsSortBody(!isSortBody);
    }
  }

  return (
    <Routes>
      <Route path="/" element={<Layout searchFilter={searchFilter} setSearchFilter={setSearchFilter} />}>
        <Route index element={<Home
          data={data}
          sortPosts={sortPosts}
          isSortId={isSortId}
          isSortTitle={isSortTitle}
          isSortBody={isSortBody} />} />
        <Route path="usersProfile" element={<UsersProfile />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
