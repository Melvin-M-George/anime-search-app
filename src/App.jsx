import React, { useEffect, useState } from 'react'

export default function App() {

  const [animeData, setAnimeData] = useState([]);

  const getData = async () => {
    const response = await fetch("https://api.jikan.moe/v4/anime?q=naruto&limit=20");
    const resData = await response.json();
    setAnimeData(resData.data);
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <>
      <div className="header">
        <h1>Anime List</h1>
        <div className="search-box">
          <input type="search" placeholder="Search anime..." />
        </div>
      </div>
    </>
  )
}
