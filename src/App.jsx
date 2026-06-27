import React, { useEffect, useState } from 'react'
import "./Components/style.css";
import AnimeList from "./Components/AnimeList.jsx";

export default function App() {

  const [search, setSearch] = useState("Naruto");
  const [animeData, setAnimeData] = useState([]);

  const getData = async () => {
    const response = await fetch(`https://api.jikan.moe/v4/anime?q=${search}&limit=20`);
    const resData = await response.json();
    setAnimeData(resData.data);
  }
  useEffect(() => {
    getData();
  }, [search]);
  return (
    <>
      <div className="header">
        <h1>Anime List</h1>
        <div className="search-box">
          <input type="search" placeholder="Search anime..." onChange={(e)=>setSearch(e.target.value)} />
        </div>
      </div>

      <div className="container">
        <div className="animeInfo">

        </div>
        <div className="anime-row">
          <h2 className="text-heading">Anime</h2>
          <div className="row">
            <AnimeList></AnimeList>
          </div>
        </div>
      </div>
    </>
  )
}
