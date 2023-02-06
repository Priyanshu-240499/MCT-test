import React, { useEffect, useState } from "react";
import NewsCard from "../NewsCard/NewsCard";
function Home() {
  const [allNewsData, setAllNewsData] = useState([]);

  useEffect(() => {
    fetch("http://newsapi.org/v2/top-headlines?country=in&apiKey=a28c557ae3b348d1a678175c292a3348")
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
