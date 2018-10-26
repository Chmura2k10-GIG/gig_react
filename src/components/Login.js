import React, { Component } from 'react'
import Notifications, { notify } from 'react-notify-toast';

export default class Login extends Component {
  constructor(props){
    super(props);

    this.state = {
        email:"",
        password:"",
        errors:[],
        authToken:''
    };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    }

    onSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { email, password } = this.state;
        let { errors } = this.state;
        const url = 'http://e3a5e7a8.ngrok.io/users/login';

        if (email && password) {
            
            const data = {
                "email": email,
                "password": password
            }
            // if(!this.validateEmail(email)){
            //     errors.push("invalid email");
            // }
            // if(password.length < 8){
            //     errors.push("password is too short");
            // }
            // else{
                this.setState({errors:[]});
                fetch(url,
                    {
                        method: 'POST',
                        body: JSON.stringify(data),
                        mode:'cors',
                        headers:{
                            'Content-Type': 'application/json'
                        }
                    }
                )
                .then(res => {
                    // do refactoru Kacper
                    if(res.status !== 200){
                        notify.show("Invalid email or password", 'error');
                        return;
                    }
                    return res.json();
                })
                .then(token => this.setState({ authToken: token }))
            }
        // }
    }

    validateEmail(email) {
        // nie uzywamy varow
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    render() {
        const { email, password, authToken } = this.state;
        const { email2 } = this.props;
        return (
        <div>
            <div className="uk-container uk-container-expand">
                <img className="uk-align-left logo-img" src={require('./../assets/images/GigLogoOrange.png')} alt="" />
            </div>
            <form className="uk-panel uk-panel-box uk-form" onSubmit={this.onSubmit}>
                {authToken ? <p>{authToken["auth_token"]}</p> :null }
                <h1 className="uk-container uk-container-expand uk-vertical-align-middle uk-heading">Login</h1>
                <hr></hr>
                <div className="uk-flex uk-flex-center">
                    {email2 ? <h2 style={{"color":"white"}}>Welcome {email2}</h2> : null}
                </div>
                <div className="uk-container uk-container-expand uk-vertical-align-middle ">
                    <div className="uk-margin uk-margin-bottom uk-margin-top">
                        <div className="uk-inline">
                            <input className="uk-input" name="email" type="text" 
                                value={email} required={true}
                                onChange={e=> this.onChange(e)} placeholder="E-mail"/>
                        </div>
                        <div className="uk-inline">
                            <input className="uk-input" name="password" type="password" 
                                value={password} required={true}
                                onChange={e=>this.onChange(e)} placeholder="Password"/>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className="uk-container uk-container-expand uk-vertical-align-middle ">          
                    <div className="uk-container uk-container-expand uk-vertical-align-middle">     
                        <div className="uk-margin">
                            <button className="uk-button uk-button-default"type="submit">LOGIN</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
  }
}