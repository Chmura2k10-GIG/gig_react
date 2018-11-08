import React, { Component } from 'react'
import { notify } from 'react-notify-toast';
import { Redirect } from 'react-router-dom';
import api from "../api";
import logo from './../assets/images/GigLogoOrange.png';
import LoginSuccessComponent from '../components/LoginSuccessComponent';
import SelectComponent from '../components/SelectComponent';
import RadioButtonComponent from '../components/RadioButtonComponent';

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            email: '',
            password: '',
            gender: null,
            created: false,
            firstName: '',
            lastName: '',
            city: '',
            age: '16',
            redirect: false
        };
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.handleSelect = this.handleSelect.bind(this)
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    validateForm(params){
        const { email, password, login, firstName, lastName, gender } = this.state;
                
        if (login.length < 3 || firstName.length < 3 || lastName.length < 3){
            notify.show('Login, first name, last name needs to be 3 signs length', 'error')
            return false
        }

        if(this.validateEmail(email) === false){
            notify.show('Invalid email...', 'error');
            return false
        }

        if (password.length < 8) {
            notify.show('Password needs to be 8 signs length', 'error')
            return false
        }

        if(gender === null){
            notify.show('Select your gender...', 'error');
            return false;
        }

        return true;
    }
    
    onSubmit(e) {
        e.preventDefault();
        const { email, password, login, city } = this.state;
        const params = {
            "user":{
                "email":email,
                "password":password,
                "login":login,
                "city":city
            }
        }
        if(this.validateForm()){
            api.createUser(params)
                .then(() => this.setState({ created: true }))
                .catch(err => notify.show(err,'error'))
        }
    }

    handleSelect(i){
        this.refs.select.onClick(i);
    }

    render() {
        const options = [];
        const { redirect, created, login, firstName, lastName, city, age, email, password } = this.state;
        for (let i = 16; i <= 100; i++) {
            options.push(<div className="uk-margin-small-bottom" onClick={ e => this.handleSelect(i)} key={i}>{i}</div>)
        }

        if(redirect){
            return <Redirect to='/Login' />;
        }
        
        return (
            <div>
                <div className="uk-container">
                    <img className="app-logo" src={logo} alt="" />
                </div>
                {created ?
                    <LoginSuccessComponent redirectToLogin={() => this.setState({ redirect: true })} />
                :
                    <form onSubmit={this.onSubmit}>
                        <h1 className="text--orange uk-text-center">Register</h1>
                        <hr></hr>
                        <div className="uk-container">
                            <div className="uk-flex uk-flex-center uk-flex-wrap uk-margin-bottom uk-margin-top">
                                <div className="uk-inline">
                                    <input className="uk-input" type="text" placeholder="Login" name="login" value={login} onChange={e => this.onChange(e)} />
                                </div>
                                <div className="uk-inline uk-margin-top">
                                    <input className="uk-input" type="text" placeholder="E-mail" name="email" value={email} onChange={e => this.onChange(e)} />
                                </div>
                                <div className="uk-inline uk-margin-top">
                                    <input className="uk-input" type="password" placeholder="Password" name="password" value={password} onChange={e => this.onChange(e)} />
                                </div>
                            </div>
                        </div>
                        <hr></hr>
                        <div className="uk-container">
                            <div className="uk-flex uk-flex-center uk-flex-wrap">
                                <div className="uk-inline uk-margin-top">
                                    <input className="uk-input" type="text" placeholder="First name" name="firstName" value={firstName} onChange={e => this.onChange(e)} />
                                </div>
                                <div className="uk-inline uk-margin-top">
                                    <input className="uk-input" type="text" placeholder="Last name" name="lastName" value={lastName} onChange={e => this.onChange(e)} />
                                </div>
                                <div className="uk-inline uk-margin-top">
                                    <input className="uk-input" type="text" placeholder="City" name="city" value={city} onChange={e => this.onChange(e)} />
                                </div>
                            </div>
                            <div className="uk-container uk-margin-top">
                                <div className="uk-flex uk-flex-wrap uk-flex-center" onChange={this.onChange.bind(this)}>
                                    <RadioButtonComponent classes="custom-radio-button uk-margin-right uk-text-bold" name="gender" value="male" text="Male" />
                                    <RadioButtonComponent classes="custom-radio-button uk-margin-right uk-text-bold" name="gender" value="female" text="Female" />
                                </div>
                                <div className="uk-flex uk-flex-wrap uk-flex-center uk-margin-top">
                                    <SelectComponent 
                                        ref="select" 
                                        selectName="Age" 
                                        options={options} 
                                        defaultValue={age} 
                                        setValueInParent={age => this.setState({ age })}
                                    />
                                </div>
                                <div className="uk-flex uk-flex-wrap uk-flex-center uk-margin-bottom uk-margin-top">
                                    <button className="custom-button" type="submit">REGISTER</button>
                                </div>
                            </div>
                        </div>
                    </form>
                }
            </div>
        )
    }
}