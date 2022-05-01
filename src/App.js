import React, { useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom";
import getAllPosts from "./api/api";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import NextPage2 from "./pages/NextPage2";
import NextPage3 from "./pages/NextPage3";
import NextPage4 from "./pages/NextPage4";
import NextPage5 from "./pages/NextPage5";
import NoMatch from "./pages/NoMatch";


function App() {
  const [data, setData] = useState([]);
  const [isSortId, setIsSortId] = useState(false);
  const [isSortTitle, setIsSortTitle] = useState(false);
  const [isSortBody, setIsSortBody] = useState(false);
  const [searchFilter, setSearchFilter] = useState('')
  // const [searchResults, setSearchResults] = useState([]);
  // const numberPages = data.length;
  // console.log(numberPages);


  useEffect(() => {
    getAllPosts().then((data) => {
      const results = data.filter(post => post.title.toLowerCase().includes(searchFilter.toLowerCase()))
      setData(results);
    });

  }, [searchFilter]);

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
          isSortBody={isSortBody} />} >

        </Route>
        <Route path="2" element={<NextPage2 />} />
        <Route path="3" element={<NextPage3 />} />
        <Route path="4" element={<NextPage4 />} />
        <Route path="5" element={<NextPage5 />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
