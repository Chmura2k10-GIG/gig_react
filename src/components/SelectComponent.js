import React, { Component } from 'react';
import arrow from '../assets/images/down-arrow.svg';

class SelectComponent extends Component {
  constructor(props){
    super(props);
    this.state={
      defaultHidden:true,
      defaultValue: this.props.defaultValue
    }

    this.onClick = this.onClick.bind(this);
  }

  onClick(value){
    this.setState({ defaultValue: value, defaultHidden:true })
    if(typeof this.props.setValueInParent === 'function'){
      this.props.setValueInParent(value)
    }
  }

  render(){
    const { selectName, options } = this.props;
    const { defaultHidden, defaultValue } = this.state;

    return(
      <div className="custom-select">
        <div onClick={() => this.setState({ defaultHidden: !defaultHidden })} className="custom-select__header uk-flex uk-text-bold uk-flex-middle uk-flex-between">
          <span className="uk-margin-small-right">{selectName}:</span>
          <span className="uk-margin-small-left">{defaultValue}</span>
          <img className={`${defaultHidden ? null : `rotate` } custom-select__arrow uk-margin-left`} src={arrow} alt="select-arrow"/>
        </div>
        <div className={`${defaultHidden ? `hidden` : null} custom-select__body uk-text-bold`}>
          {options}
        </div>
      </div>
    )
  }
}

export default SelectComponent;