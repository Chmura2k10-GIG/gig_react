import React, { Component } from 'react'
import { clearToken } from '../actions/user';
import NavbarComponent from '../components/NavbarComponent';
import SidebarComponent from '../components/SidebarComponent';
import FooterComponent from '../components/FooterComponent';
import api from '../api'
import { connect } from 'react-redux';

class Conversation extends Component {
  constructor(props){
    super(props);
    this.state={
      conversation:this.props.location.conversation || {},
      showSidebar: false,
      messages:[]
    }
  }

  componentDidMount(){
    api.showConversation(this.props.location.conversation.id)
      .then( res => this.setState({ messages: res.data }))
  }

  render() {
    const { user } = this.props;
    const { showSidebar, messages } = this.state;
    return (
      <div style={{ "height": "100vh", "padding": "25px" }} className="uk-flex uk-flex-wrap">
        <NavbarComponent showSidebar={() => this.setState({ showSidebar: !showSidebar })} avatar={user.current.avatar} />
        <SidebarComponent clearToken={clearToken} user={user.current} showSidebar={showSidebar} />
        <div style={{ "marginTop": "100px" }} className="uk-flex uk-flex-wrap uk-flex-column">
          {messages.map((message,key) => {
            return (
              <div key={key} className="uk-flex uk-flex-wrap uk-flex-column">
                <span className="uk-text-bold uk-margin-right">{message.user.login}</span>
                <span className="uk-text-bold ">{message.created_at}</span>
                <span className="uk-text-bold uk-display-inline-block">{message.content}</span>
              </div>
            )
          })}
        </div>
        <FooterComponent />
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    user: state.user
  }
}
export default connect(mapStateToProps, { clearToken })(Conversation)