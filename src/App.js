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



  useEffect(() => {

    getAllPosts().then((data) => {
      const results = data.filter(post => post.title.toLowerCase().includes(searchFilter.toLowerCase()))
      setData(results);
    });

  }, [searchFilter]);


  const nextData = (event) => {
    const start = event.target.href.substr(event.target.href.length - 1) * 10;
    console.log(start);
    getAllPosts(start).then((data) => {
      const results = data.filter(post => post.title.toLowerCase().includes(searchFilter.toLowerCase()))
      setData(results);
    });
  }

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
      <Route path="/" element={<Layout searchFilter={searchFilter} setSearchFilter={setSearchFilter} sortPosts={sortPosts}
        isSortId={isSortId}
        isSortTitle={isSortTitle}
        isSortBody={isSortBody}
        nextData={nextData}
      />}>
        <Route index element={<Home
          data={data} />} >
        </Route>
        <Route path="1" element={<NextPage2 data={data}
          sortPosts={sortPosts}
          isSortId={isSortId}
          isSortTitle={isSortTitle}
          isSortBody={isSortBody} />} />
        <Route path="2" element={<NextPage3 data={data}
          sortPosts={sortPosts}
          isSortId={isSortId}
          isSortTitle={isSortTitle}
          isSortBody={isSortBody} />} />
        <Route path="3" element={<NextPage4 data={data}
          sortPosts={sortPosts}
          isSortId={isSortId}
          isSortTitle={isSortTitle}
          isSortBody={isSortBody} />} />
        <Route path="4" element={<NextPage5 data={data}
          sortPosts={sortPosts}
          isSortId={isSortId}
          isSortTitle={isSortTitle}
          isSortBody={isSortBody} />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
