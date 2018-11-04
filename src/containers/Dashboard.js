import React, { Component } from 'react'
import { connect } from 'react-redux'

class Dashboard extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        TEST
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user:state.user
  }
}

export default connect(mapStateToProps, {})(Dashboard)
