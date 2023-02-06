import React, { useEffect, useState } from "react";
import NewsCard from "../NewsCard/NewsCard";
function Home() {
  const [allNewsData, setAllNewsData] = useState([]);

  useEffect(() => {
    fetch("https://inshorts.deta.dev/news?category=all")
      .then((res) => res.json())
      .then((data) => setAllNewsData(data.data));
      // setting fetched data in our useState hook......................
  }, []);

  return (
    <>
      {allNewsData.length === 0 ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {allNewsData.map((item,index) => (
            <NewsCard key={item.id} data={item} index={index}/>
          ))}
        </>
      )}
    </>
   
  );
}

export default Home;
