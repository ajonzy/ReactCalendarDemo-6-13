import React, { Component } from 'react'

export default class CalendarBox extends Component {
   constructor(props) {
       super(props)

       this.state = {
           text: ""
       }

       this.handleTextUpdate = this.handleTextUpdate.bind(this)
   }

   handleTextUpdate(event) {
       this.setState({ text: event.target.value })
   }

   render() {
       return (
           <div className={`calendar-box ${this.props.overflow ? "overflow" : ""}`}>
               <div className="date">
                    {this.props.date}
               </div>

               <textarea 
                    onChange={this.handleTextUpdate} 
                    value={this.state.value} 
                    disabled={this.props.overflow ? true : false}
                ></textarea>
           </div>
       )
   }
}