import React, { Component } from 'react'
import SidebarComponent from '../components/SidebarComponent';
import FooterComponent from '../components/FooterComponent';
import NavbarComponent from '../components/NavbarComponent';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { clearToken, updateUser, updateUserInstruments } from '../actions/user';
import SelectComponent from '../components/SelectComponent';
import RadioButtonComponent from '../components/RadioButtonComponent';
import SuccessInfoComponent from '../components/SuccessInfoComponent';
import api from '../api';

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSidebar: false,
      updated: false,
      redirect: false,
      editUser:{
        login: '',
        email: '',
        gender: null,
        avatar: '',
        firstname: '',
        lastname: '',
        description: '',
        city: '',
        age: this.props.user.age,
        userInstrument:'',
      },
      instruments:[]
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this)
    this.handleSelect = this.handleSelect.bind(this);
    this.handleSelectInstrument = this.handleSelectInstrument.bind(this);
  }

  componentDidMount(){
    const { user } = this.props;
    api.getUserInstruments(user.id)
      .then( res => {
        this.setState({ editUser: { userInstruments: res.data , ...user}})
      })
    api.getInstruments()
      .then( res => this.setState({ instruments: res.data }))
  }

  onChange(e) {
    this.setState({ editUser:{ ...this.state.editUser, [e.target.name]: e.target.value } })
  }

  onSubmit(e){
    e.preventDefault();
    const { editUser } = this.state;
    const { login, firstname, lastname, age, city, description, gender, userInstrument } = editUser;
    const { updateUser, updateUserInstruments } = this.props;
    const params = {
      "user":{
        "login":login,
        "firstname":firstname,
        "lastname":lastname,
        "age":age,
        "city":city,
        "description":description,
        "gender":gender
      }
    }

    const instrument = {
      "instrument":{
        "name":userInstrument
      }
    }

    updateUser(params, editUser.id)
    updateUserInstruments(instrument, editUser.id)
    this.setState({ updated: true })
  }

  handleSelect(i) {
    this.refs.select.onClick(i);
  }

  handleSelectInstrument(instrument) {
    this.refs.selectInstrument.onClick(instrument);
  }

  render() {
    const { showSidebar, editUser, redirect, updated, instruments } = this.state;
    const { user, token, clearToken } = this.props;
    const options = []
    const instrumentsList = []
    for (let i = 16; i <= 100; i++) {
      options.push(<div className="uk-margin-small-bottom" onClick={e => this.handleSelect(i)} key={i}>{i}</div>)
    }
    for(let j = 0; j < instruments.length; j++ ){
      instrumentsList.push(<div className="uk-margin-small-bottom" onClick={e => this.handleSelectInstrument(instruments[j]["name"])} key={j}>{instruments[j]["name"]}</div>)
    }
    if (token.length === 0) {
      return (
        <Redirect to="/" />
      )
    }

    if (redirect) {
      return (
        <Redirect to="/dashboard" />
      )
    }

    return (
      <div className="uk-flex uk-flex-column uk-flex-wrap uk-flex-between">
        <NavbarComponent showSidebar={() => this.setState({ showSidebar: !showSidebar })} avatar={user.avatar} />
        <SidebarComponent clearToken={clearToken} user={user} showSidebar={showSidebar} />
        {updated ? 
          <SuccessInfoComponent message="Profil zaktualizowany pomyślnie" handler={() => this.setState({ redirect:true })} buttonText="Wróć do dashboardu" />
          :
          <form style={{ "marginTop": "90px", "minHeight": "370px" }} onSubmit={this.onSubmit}>
            <h1 className="text--orange uk-text-center">Edytuj profil</h1>
            <hr></hr>
            <div className="uk-container">
              <div className="uk-flex uk-flex-center uk-flex-wrap uk-margin-bottom uk-margin-top">
                <div className="uk-inline">
                  <input className="uk-input" type="text" placeholder="Login" name="login" value={editUser.login} onChange={e => this.onChange(e)} />
                </div>
                <div className="uk-inline uk-margin-top">
                  <input className="uk-input" type="text" placeholder="E-mail" name="email" value={editUser.email} onChange={e => this.onChange(e)} />
                </div>
              </div>
            </div>
            <hr></hr>
            <div className="uk-container">
              <div className="uk-flex uk-flex-center uk-flex-wrap">
                <div className="uk-inline uk-margin-top">
                  <input className="uk-input" type="text" placeholder="Imię" name="firstname" value={editUser.firstname} onChange={e => this.onChange(e)} />
                </div>
                <div className="uk-inline uk-margin-top">
                  <input className="uk-input" type="text" placeholder="Nazwisko" name="lastname" value={editUser.lastname} onChange={e => this.onChange(e)} />
                </div>
                <div className="uk-inline uk-margin-top">
                  <input className="uk-input" type="text" placeholder="Miasto" name="city" value={editUser.city} onChange={e => this.onChange(e)} />
                </div>
                <div className="uk-inline uk-margin-top">
                  <textarea style={{"minHeight":"150px"}} className="uk-input" type="text" placeholder="Opis" name="description" value={editUser.description} onChange={e => this.onChange(e)} />
                </div>
              </div>
              <div className="uk-container uk-margin-top">
                <div className="uk-flex uk-flex-wrap uk-flex-center" onChange={this.onChange.bind(this)}>
                  <RadioButtonComponent classes="custom-radio-button uk-margin-right uk-text-bold" name="gender" value="male" text="Mężczyzna" />
                  <RadioButtonComponent classes="custom-radio-button uk-margin-right uk-text-bold" name="gender" value="female" text="Kobieta" />
                </div>
                <div className="uk-flex uk-flex-wrap uk-flex-center uk-margin-top">
                  <SelectComponent
                    ref="select"
                    selectName="Wiek"
                    options={options}
                    defaultValue={editUser.age}
                    setValueInParent={age => this.setState({ editUser: {...this.state.editUser, age } })}
                  />
                </div>
                <div className="uk-flex uk-flex-wrap uk-flex-center uk-margin-top">
                  <SelectComponent
                    ref="selectInstrument"
                    selectName="Instrumenty"
                    options={instrumentsList}
                    defaultValue={"Electric Guitar"}
                    setValueInParent={userInstrument => this.setState({ editUser: {...this.state.editUser, userInstrument } })}
                  />
                </div>
                <div className="uk-flex uk-flex-wrap uk-flex-center uk-margin-bottom uk-margin-top">
                  <button className="custom-button" type="submit">Zatwierdź zmiany</button>
                </div>
              </div>
            </div>
          </form>
        }
        <FooterComponent />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.current,
    token: state.user.token
  }
}

export default connect(mapStateToProps, {updateUser, clearToken, updateUserInstruments })(EditProfile)