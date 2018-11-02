import React, { Component } from 'react'
import logo from './../assets/images/GigLogoOrange.png';
import Notifications, { notify } from 'react-notify-toast';
import api from "../api";
import { isNull } from 'util';

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            gender: null,
            created: 'false',
            firstName: '',
            lastName: '',
            city: '',
            age: '16',
            errors: []
        };
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
        console.log(this.state);
    }

    validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    validateForm(params){
        let errors  = [];

        Object.keys(params.user).map(key => {
                if(!params.user[key]){
                    errors.push(`invalid ${key}`);
                    console.log('rest');
                }else if(key == "email")
                {
                    if(!this.validateEmail(params.user[key]))
                    {
                        errors.push(`invalid ${key}`);
                        console.log('email');
                    }
                }else if(key == "password" || key == "username")
                {
                    if(params.user[key].length < 8)
                    {
                        errors.push(`${key} is too short(minimum 8 signs)`);
                        console.log('password and username');
                    }
                }
        });
        
        if(errors.length > 0){
            this.setState({ errors })
            return false;
        }else {return true;}
    }
    
    onSubmit(e) {
        e.preventDefault();
        const { email, password, firstName, lastName, username, gender,city } = this.state;
        const params = {
            "user":{
                "email":email,
                "password":password
            }
        }
        if(this.validateForm(params)){
            // const url = 'http://e3a5e7a8.ngrok.io/users';
            this.setState({ errors: [] });
            notify.show("success",'success');
            api.createUser(params)
           //  .then( () => this.setState({ created: true }))
            // .catch( err => notify.show(err,'error'))
        }
        // i np jak created jest na true to chowaj formularz a wyświetlaj komunikat w divie czy tam w czym "Udało się zarejestrować"
        // i pod tym button "Przejdź do logowania" który przekieruje na strone z logowaniem
        // lub coś w ten deseń 
    }
    
    render() {
        const options = [];
        for (let i = 16; i <= 100; i++) {
            options.push(<option key={i}>{i}</option>)
        }
        
        return (
            <div className="whole-screen">
                <div className="uk-container uk-container-expand uk-margin-bottom">
                    <img className="uk-align-left logo-img" src={logo} alt="" />
                </div>
                <form className="uk-panel uk-panel-box uk-form" onSubmit={this.onSubmit}>
                    <h1 className="uk-container uk-container-expand uk-vertical-align-middle uk-heading">Register</h1>
                    <hr></hr>
                    <div className="uk-container uk-container-expand uk-vertical-align-middle ">
                        <div className="uk-margin uk-margin-bottom uk-margin-top">
                            <div className="uk-inline">
                                <input className="uk-input" type="text" placeholder="Username" name="username" value={this.state.username} onChange={e => this.onChange(e)} />
                            </div>
                            <div className="uk-inline">
                                <input className="uk-input" type="text" placeholder="E-mail" name="email" value={this.state.email} onChange={e => this.onChange(e)} />
                            </div>
                            <div className="uk-inline">
                                <input className="uk-input" type="password" placeholder="Password" name="password" value={this.state.password} onChange={e => this.onChange(e)} />
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="uk-container uk-container-expand uk-vertical-align-middle ">
                        <div className="uk-margin uk-margin-top">
                            <div className="uk-inline">
                                <input className="uk-input" type="text" placeholder="First Name" name="firstName" value={this.state.firstName} onChange={e => this.onChange(e)} />
                            </div>
                            <div className="uk-inline">
                                <input className="uk-input" type="text" placeholder="Last Name" name="lastName" value={this.state.lastName} onChange={e => this.onChange(e)} />
                            </div>
                            <div className="uk-inline">
                                <input className="uk-input" type="text" placeholder="City" name="city" value={this.state.city} onChange={e => this.onChange(e)} />
                            </div>
                        </div>
                        <div className="uk-container uk-container-expand uk-vertical-align-middle">
                            <div className="uk-margin" onChange={this.onChange.bind(this)}>
                                <label><input className="uk-radio" type="radio" name="gender" value="Male" /> Male</label>
                                <label><input className="uk-radio" type="radio" name="gender" value="Female" /> Female</label>
                            </div>
                            <div className="uk-margin">
                                <div className="uk-inline">
                                    <div className="uk-button-mini uk-form-select">
                                    Age:
                                    {
                                    }
                                    <select>
                                        {options}
                                    </select>
                                    </div>
                                </div>
                            </div>
                            <div className="uk-margin">
                                <button className="uk-button uk-button-default" type="submit">REGISTER</button>
                                <br />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}