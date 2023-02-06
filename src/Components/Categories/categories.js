import React,{useState,useEffect} from 'react'
import {useParams} from "react-router-dom";
import NewsCard from '../NewsCard/NewsCard';
function Categories() {
const category=useParams().category;
const [categoryData, setCategoryData] = useState([]);
  useEffect(() => {
    fetch(`https://inshorts.deta.dev/news?category=${category}`)
      .then((res) => res.json())
      .then((data) => setCategoryData(data.data));
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
