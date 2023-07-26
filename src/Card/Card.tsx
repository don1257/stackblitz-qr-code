import * as React from "react"
import './Card.css'

const Card = ({title, description}) => {

return (
  <div className='card'>
    
    <img 
      className='card-image' 
      src='https://i.ibb.co/khc8tcy/image-qr-code.png' 
    /> 
    
    <p className='card-title' >
      {title} 
    </p>
    
    <p className='card-description'> {description} </p>
  
  </div>
)

}

export default Card;