import React, { Component } from 'react';

import monthData from "../../static/assets/monthData"

import Header from "./header"
import Footer from "./footer"
import Content from "./content/content"

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      id: monthData[5].id,
      month: monthData[5].month,
      daysInMonth: monthData[5].daysInMonth,
      daysInPreviousMonth: monthData[5].daysInPreviousMonth,
      startDay: monthData[5].startDay,
      year: monthData[5].year
    }

    this.changeMonth = this.changeMonth.bind(this)
  }

  changeMonth(direction) {
    const newMonth = direction === "+" ? monthData[this.state.id + 1] : monthData[this.state.id - 1]

    this.setState({
      id: newMonth.id,
      month: newMonth.month,
      daysInMonth: newMonth.daysInMonth,
      daysInPreviousMonth: newMonth.daysInPreviousMonth,
      startDay: newMonth.startDay,
      year: newMonth.year
    })
  }

  render() {
    return (
      <div className='app'>
        <Header month={this.state.month} changeMonth={this.changeMonth} />
        <Content 
          daysInMonth={this.state.daysInMonth} 
          daysInPreviousMonth={this.state.daysInPreviousMonth} 
          startDay={this.state.startDay}
        />
        <Footer year={this.state.year} />
      </div>
    );
  }
}
