import React, { Component } from 'react'
import logo from './../assets/images/GigLogoOrange.png';
import Notifications, { notify } from 'react-notify-toast';
import api from "../api";

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            gender: null,
            accepted: 'false',
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
    }

    validateEmail(email) {
        // re nigdzie się nie zmienia, a skoro tak to powinien być tutaj const
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    validateForm(email,password,firstName,lastName,username,gender,city){
        // teraz tak trochę z pizdy jest, zrób to tak że do validateForm przekażesz obiekt czyli:
        // const params = {
            // email: email,
            // username: username
        //}
        // i to samo z pozostałymi parametrami, później przejedź po kluczach obiektu(Object.keys(nazwa_obiektu)) używając funkcji forEach:
        //  i dla każdego parametru  (Object.values(nazwa_obiektu)) sprawdzisz te warunki które sprawdzasz w ifach swoich, jeżeli gdzieś
        // walidacja nie przejdzie to dasz wtedy errors.push(`invalid ${key}`) np.
        // w ten sposób będzie czytelniej a sama funkcja się skróci o 35-40 linijek.


        let errors  = [];
        if (!this.validateEmail(email)) {
            notify.show("Invalid email", 'error');
            errors.push("invalid email");
        }
        if (password.length < 8) {
            notify.show("Password is too short, minimum is 8 signs", 'error');
            errors.push("Password is too short");
        }
        if (username.length < 8) {
            notify.show("Username is too short, minimum is 8 signs", 'error');
            errors.push("Username is too short");
        }
        if (!gender) {
            notify.show("You need to choose your gender", 'error');
            errors.push("You need to choose ender");
        }
        if (!firstName) {
            notify.show("You need to fill first name field", 'error');
            errors.push("You need to fill first name field");
        }
        if (!lastName) {
            notify.show("You need to fill last name field", 'error');
            errors.push("You need to fill last name field");
        }
        if (!city) {
            notify.show("You need to fill city field", 'error');
            errors.push("You need to fill city field");
        }

        if(errors.length > 1){
            this.setState({ errors })
            return false;
        }else {return true;}
    }
    
    onSubmit(e) {
        e.preventDefault();
        const { email, password, firstName, lastName, username, gender,city } = this.state;
        if(this.validateForm(email,password,firstName,lastName,username,gender,city)){
            // po co ten notify?
            notify.show("Connecting...",'success');

            //nie widzę żebyś gdzieś używał tej zmiennej
            const { isRegistered } = this.props;

            const url = 'http://e3a5e7a8.ngrok.io/users';
            this.setState({ errors: [] });
            const params = {
                "user":{
                    "email":email,
                    "password":password
                }
            }
            api.createUser(params);

        // powinno to wyglądać tak:
        // api.createUser(params)
            //.then( () => this.setState({ created: true }))
            // .catch( err => notify.show(err,'error'))

        // i np jak created jest na true to chowaj formularz a wyświetlaj komunikat w divie czy tam w czym "Udało się zarejestrować"
        // i pod tym button "Przejdź do logowania" który przekieruje na strone z logowaniem
        // lub coś w ten deseń 
        
        
        // to niżej do wyjebania
        //     fetch(url,
        //         {
        //             method: 'POST',
        //             body: JSON.stringify(params),
        //             mode: 'cors',
        //             headers: {
        //                 'Content-Type': 'application/json'
        //             }
        //         }
        //     )
        //     .then(res => console.log(res))
        //     .then( () => isRegistered(email))
        // }else {notify.show("Cannot connect to server",'error');
        }
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
                                    {// ostyluj też tą rozwijaną liste selecta, scrollbar itp bo wygląda to chujowo
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


    // jak nie używsz to do wyjebania

                                /* <div className="error uk-margin">
                                <label></label>
                               // {this.state.errors.map((error, i) => (<p key={i}>{error}</p>))}
                            </div> */
}