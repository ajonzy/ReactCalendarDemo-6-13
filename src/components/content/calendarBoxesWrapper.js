import React from 'react'

import CalendarBox from "./calendarBox"

export default function calendarBoxesWrapper(props) {
    function renderBoxes() {
        const boxesContainer = []

        for (let i=1; i<=props.startDay; i++) {
            let date = props.daysInPreviousMonth - (props.startDay - i)
            boxesContainer.push(
                <CalendarBox key={`P${i}`} date={date} overflow={true} />
            )
        }

        for (let i=1; i<=props.daysInMonth; i++) {
            boxesContainer.push(
                <CalendarBox key={i} date={i} overflow={false} />
            )
        }

        for (let i=1; i<=(42 - (props.startDay + props.daysInMonth)); i++) {
            boxesContainer.push(
                <CalendarBox key={`N${i}`} date={i} overflow={true} />
            )
        }

        return boxesContainer
    }

   return (
       <div className='calendar-boxes-wrapper'>
            {renderBoxes()}
       </div>
   )
}