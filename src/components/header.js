import React from 'react'

export default function header(props) {
   return (
       <div className='header-wrapper'>
           <button onClick={() => props.changeMonth("-")}>Previous</button>
           <h2>{props.month}</h2>
           <button onClick={() => props.changeMonth("+")}>Next</button>
       </div>
   )
}