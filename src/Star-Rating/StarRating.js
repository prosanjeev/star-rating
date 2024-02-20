import { useState } from "react";
import { MdStarRate } from "react-icons/md";
import './StarRating.css'

const StarRating = ({ noOfStars = 5 }) => {

    const [rating, setRating]= useState(0)
    const [hover, setHover]= useState(0)

    function handleClick(getCurrentIndex) {
        setRating(getCurrentIndex);
      }
    
      function handleMouseEnter(getCurrentIndex) {
        setHover(getCurrentIndex);
      }
    
      function handleMouseLeave() {
        setHover(rating);
      }

  return (
    <div>
       {
        [...Array(noOfStars)].map((_,index)=>{
            return <MdStarRate key={index}
            className={index <= (hover || rating) ? "active" : "inactive"}
            onClick={()=> handleClick(index)}
            onMouseMove={()=> handleMouseEnter(index)}
            onMouseLeave={()=>handleMouseLeave()}
            size={40}            
            />
        })
       } 

    </div>
  )
}

export default StarRating