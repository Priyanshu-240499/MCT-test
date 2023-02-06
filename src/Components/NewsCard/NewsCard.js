import React from 'react'
import "./NewsCard.css";
import { motion } from "framer-motion"
function NewsCard({data:{author,content,date,imageUrl,time,title,url}, index}) {
    return (
    <motion.div initial={{opacity:0,x:-50}} animate={{ opacity:1,x:0 }} transition={{duration:0.1*index}}  className='NewsCard'>
      <div className='NewsCard-img'>
        <img src={imageUrl} alt={title} height="100%" width="100%" loading="lazy" />
      </div>
      <div className='NewsCard-details'>
        <h5 className='title'>{title}</h5>
        <p style={{color:"gray"}}>~ {author}</p>
        <p>~ {date} - {time}</p>
        <p>{content}</p>
        <a rel='noreferrer' href={url} target="_blank">Read more...</a>
      </div>
    </motion.div>
  )
}

export default NewsCard;
