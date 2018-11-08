import React, { Component } from 'react'
import example1 from '../assets/images/example-avatar.jpg'
import example2 from '../assets/images/example-avatar2.jpeg'
import arrow from '../assets/images/down-arrow.svg'

export default class SliderComponent extends Component {
  render() {
    return (
      <div className="slider uk-width-1-1">
        <div className="slide uk-width-1-1 uk-position-relative">
          <img src={example1} alt="slide" className="uk-width-1-1" />
          <div className="slider__arrow-container">
            <img className="slider__arrow rotate-left" src={arrow} alt="left-arrow"/>
            <img className="slider__arrow rotate-right" src={arrow} alt="right-arrow"/>
          </div>
          <div className="slider__description uk-flex uk-flex-center uk-margin-bottom">
            <span className="uk-text-bold">Cool grill</span>
          </div>
        </div>
      </div>
    )
  }
}
