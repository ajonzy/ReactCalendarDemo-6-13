import React from 'react'

import DaysWrapper from "./daysWrapper"
import CalendarBoxesWrapper from "./calendarBoxesWrapper"

export default function content(props) {
   return (
       <div className='content-wrapper'>
           <DaysWrapper />
           <CalendarBoxesWrapper 
                daysInMonth={props.daysInMonth}
                daysInPreviousMonth={props.daysInPreviousMonth}
                startDay={props.startDay}
           />
       </div>
   )
}