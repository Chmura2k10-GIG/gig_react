import React, { Component } from 'react'
import { connect } from 'react-redux';
import { notify } from 'react-notify-toast';
import { clearToken } from '../actions/user';
import NavbarComponent from '../components/NavbarComponent';
import SidebarComponent from '../components/SidebarComponent';
import FooterComponent from '../components/FooterComponent';
import api from '../api'
import { Redirect, Link } from 'react-router-dom'
import placeholder from '../assets/images/placeholder-user.png';

class Messenger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSidebar: false,
      showUsers:false,
      conversations:[],
      createMessage:false,
      receiver:'',
      content:'',
      users:[],
      messages:[],
      lastMessage:'',
      showReceiver:false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount(){
    const { user } = this.props;
    api.getUsers()
      .then(res => this.setState({ users: res.data }))
      .then(() => {
        api.getUserConversations()
          .then( res => this.setState({ conversations: res.data }))
          .then(() => {
            this.state.conversations.map(conversation => {
              api.showConversation(conversation.id)
                .then(res => {
                  this.setState({ messages: res.data })
                })
                .then(() => {
                  let lastMessage = this.state.messages.slice(-1).pop();
                  if(lastMessage.user.id === user.current.id){
                    this.setState({ showReceiver: true })
                  }
                  this.setState({ lastMessage: this.state.messages.slice(-1).pop()})
                })
            })
          })
      })
      
    }
    
    onChange(e){
      this.setState({ [e.target.name]: e.target.value })
    }
    
    onSubmit(e){
      e.preventDefault();
      const { receiver, content, users } = this.state;
      const receiverUser = users.filter(user => user.login === receiver)
      const params = {
        receiver_id: receiverUser[0].id,
        message:{
          content:content
        }
      }
      api.createConversation(params)
      .then(() => notify.show('Wiadomość została wysłana', 'success'))
      .then(() => {
        api.getUserConversations()
        .then(res => this.setState({ conversations: res.data }))
      })
    }
    
    render() {
      const { user } = this.props;
      const { showSidebar, messages, conversations, createMessage, receiver, content, lastMessage } = this.state;
      if (user.token.length === 0) {
        return (
          <Redirect to="/" />
        )
      }
      if(createMessage){
      return(
        <div style={{ "height": "100vh", "padding": "25px" }} className="uk-flex uk-flex-wrap">
          <NavbarComponent showSidebar={() => this.setState({ showSidebar: !showSidebar })} avatar={user.current.avatar} />
          <SidebarComponent clearToken={clearToken} user={user.current} showSidebar={showSidebar} />
          <div style={{ "marginTop": "100px" }} className="uk-flex">
            <form onSubmit={this.onSubmit} className="uk-flex uk-flex-middle uk-flex-column uk-flex-wrap">
              <button onClick={() => this.setState({ createMessage: false })} className="custom-button uk-margin-top">Pokaż wszystkie konwersacje</button>             
            <div className="uk-flex uk-flex-center uk-flex-wrap">
              <div className="uk-inline uk-margin-top">
                <input className="uk-input" type="text" placeholder="Adresat" name="receiver" value={receiver} onChange={e => this.onChange(e)} />
              </div>
              <div className="uk-inline uk-margin-top">
                <textarea style={{ "minHeight": "150px" }} className="uk-input" type="text" placeholder="Treść" name="content" value={content} onChange={e => this.onChange(e)} />
              </div>
          </div>
          <div className="uk-flex uk-flex-wrap uk-flex-center uk-margin-bottom uk-margin-top">
            <button className="custom-button" type="submit">Wyślij wiadomość</button>
          </div>
            </form>

          </div>
          <FooterComponent />
        </div>
      )
    }
    return (
      <div style={{"height":"100vh", "padding":"25px"}} className="uk-flex uk-flex-wrap">
        <NavbarComponent showSidebar={() => this.setState({ showSidebar: !showSidebar })} avatar={user.current.avatar} />
        <SidebarComponent clearToken={clearToken} user={user.current} showSidebar={showSidebar} />
        <div style={{ "marginTop": "100px" }} className="uk-flex">
          {conversations.length === 0 ?
            <div className="uk-flex uk-flex-column uk-flex-wrap uk-width-1-1">
              <h3 className="uk-text-center text--orange uk-width-1-1">Brak utworzonych konwersacji</h3>
              <button onClick={() => this.setState({ createMessage: true })} className="custom-button uk-margin-top">Napisz wiadomość</button>
            </div> 
          :
            <div className="uk-flex uk-flex-column uk-flex-wrap">
              <h3 className="uk-text-center text--orange">Konwersacje:</h3>
              {conversations.map(( conversation, key ) => {
                // let receiver = users.filter( user => user.id === conversation.sender_id)
                return(
                  <div key={key} className="uk-flex uk-flex-wrap uk-flex-column uk-flex-middle uk-margin-medium-top">
                    {lastMessage ?
                      lastMessage.user.avatar ? <Link to={{ pathname: `/conversation/${conversation.id}`, conversation: conversation }}><img style={{ "maxHeight": "285px", "borderRadius": "50%" }} src={lastMessage.user.avatar} alt="avatar-user" /></Link> : <Link to={{ pathname: `/conversation/${conversation.id}`, conversation: conversation }}><img style={{ "maxHeight": "100px" }} src={placeholder} alt="placeholder-user" /></Link>
                    : null
                    }
                    {/* {messages[0].user.avatar ? <Link to={{ pathname: `/conversation/${conversation.id}`, conversation: conversation }}><img style={{ "maxHeight": "285px", "borderRadius": "50%" }} src={messages[0].user.avatar} alt="avatar-user" /></Link> : <Link to={{ pathname: `/conversation/${conversation.id}`, conversation: conversation }}><img style={{ "maxHeight": "100px" }} src={placeholder} alt="placeholder-user" /></Link>} */}

                  </div>
                )
              })}
              <button onClick={() => this.setState({ createMessage: true })} className="custom-button uk-margin-medium-top">Utwórz nową konwersacje</button>
            </div> 

          }
          
        </div>
        <FooterComponent />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return{
    user:state.user
  }
}
export default connect(mapStateToProps, { clearToken })(Messenger)