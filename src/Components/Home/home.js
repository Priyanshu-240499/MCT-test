import React, { useEffect, useState } from "react";
import NewsCard from "../NewsCard/NewsCard";
function Home() {
  const [allNewsData, setAllNewsData] = useState([]);
  
  useEffect(() => {
    fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=83e9ec101bbb4ed0a1d7290d893df201")
      .then((res) => res.json())
      .then((data) => setAllNewsData(data.articles));
      // setting fetched data in our useState hook......................
  }, []);

  return (
    <>
      {allNewsData.length === 0 ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {allNewsData.map((item,index) => (
            <NewsCard key={item.title} data={item} index={index}/>
          ))}
        </>
      )}
    </>
   
  );
}

export default Home;
