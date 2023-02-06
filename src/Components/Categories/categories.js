import React,{useState,useEffect} from 'react'
import {useParams} from "react-router-dom";
import NewsCard from '../NewsCard/NewsCard';
function Categories() {
const category=useParams().category;
const [categoryData, setCategoryData] = useState([]);
  useEffect(() => {
    fetch(`http://newsapi.org/v2/top-headlines?country=in&apiKey=a28c557ae3b348d1a678175c292a3348&category=${category}`)
      .then((res) => res.json())
      .then((data) => setCategoryData(data.articles));
  }, [category]);

  return (
    <>
      {categoryData.length === 0 ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {categoryData.map((item,index) => (
            <NewsCard key={item.title} data={item} index={index} />
          ))}
        </>
      )}
    </>
   
  );
}

export default Categories
