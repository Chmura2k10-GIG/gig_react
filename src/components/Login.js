import React, { Component } from 'react'

export default class Login extends Component {
  constructor(props){
    super(props);

    this.state = {
        email:"",
        password:"",
        errors:[]
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
        var url = 'https://localhost:8081/users/login';

        if (email && password) {
            
            var data = {
                email:"tes4t@example",
                password:"example"
            }
            if(!this.validateEmail(email)){
                console.log("invalid email");
                errors.push("invalid email");
            }
            if(password.length < 8){
                console.log("password is too short");
                errors.push("password is too short");
            }
            else{
                this.setState({errors:[]});
                fetch(url,
                    {
                        method: 'POST',
                        body: JSON.stringify(data),
                        headers:{
                            'Content-Type': 'application/json'
                        }
                    }
                ).then(res => res.json())
                .then(response => console.log('Success: ', JSON.stringify(response)))
                .catch(error => console.error('Error: ', error));
            }
        }
    }

    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    render() {
        console.log(this.state.errors);
        return (
        <div>
            <div className="uk-container uk-container-expand">
                <img className="uk-align-left logo-img" src={require('./../assets/images/GigLogoOrange.png')} alt="" />
            </div>
            <form className="uk-panel uk-panel-box uk-form" onSubmit={this.onSubmit}>
                <h1 className="uk-container uk-container-expand uk-vertical-align-middle uk-heading">Login</h1>
                <hr></hr>
                <div className="uk-container uk-container-expand uk-vertical-align-middle ">
                    <div className="uk-margin uk-margin-bottom uk-margin-top">
                        <div className="uk-inline">
                            <input className="uk-input" name="email" type="text" 
                                value={this.state.email} required={true}
                                onChange={e=> this.onChange(e)} placeholder="E-mail"/>
                        </div>
                        <div className="uk-inline">
                            <input className="uk-input" name="password" type="password" 
                                value={this.state.password} required={true}
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