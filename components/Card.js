import React from 'react'
import Image from 'next/image'
import photo from '../public/img/Clear.png'



export default function Card() {
    
  return (
    <div>
      <div className='main'>
        <div className='input'>
        <button>Search for places</button>
       </div>
        <div className='imagen'>
        <Image src={photo} alt='imagen' width={"100"} height={"100"} />
        </div>
        <div>
      
        </div>
         <div>Hola</div>
       </div>
    </div>
  )
}
