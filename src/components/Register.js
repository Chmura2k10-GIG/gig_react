import React, { Component } from 'react'
export default class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            gender: null,
            accepted: 'false',
            firstName:'',
            lastName:'',
            city:'',
            age: '16',
            errors: []
        };
        this.onChange=this.onChange.bind(this)
        this.onSubmit=this.onSubmit.bind(this)
    }

    onChange(e){
        this.setState({ [e.target.name]:e.target.value})
        }

    setGender(e){
        this.setState({ [e.target.name]:e.target.value})
        console.log(e.target.value)
        console.log(e.target.name)
        }

    validateEmail(email) {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    onSubmit(e) {
        e.preventDefault();
        const { email, password,firstName,lastName,username,gender } = this.state;

        let {errors} = this.state;
        const url = 'http://localhost:3000/users';

        let data = {
            "email":"test@example.com",
            "password":"test"
        }

        if (email && password && firstName && lastName && username && gender) {

            if(!this.validateEmail(email)){
                console.log("invalid email");
                errors.push("invalid email");
            }
            if(password.length < 8){
                console.log("password is too short");
                errors.push("password is too short");
            }
            if(username.length < 8){
                console.log("username is too short");
                errors.push("username is too short");
            }
        }
        else{
            console.log("you need to fill all fields");
            errors.push("you need to fill all fields");
        }

            //this.setState({errors:[]});
            // fetch(url,
            //     {
            //         method: 'POST',
            //         body: JSON.stringify(data),
            //         mode:'cors',
            //         headers:{
            //             'Content-Type': 'application/json'
            //         }
            //     }
            // )
            // .then(res => console.log(res))
    }

  render() {
    const options = [];
    for(let i=16;i<=100;i++){
        options.push(<option key={i}>{i}</option>)
    }

    return (
        <div className="whole-screen">
            <div className="uk-container uk-container-expand uk-margin-bottom">
                <img className="uk-align-left logo-img" src={require('./../assets/images/GigLogoOrange.png')} alt="" />
            </div>
                <form className="uk-panel uk-panel-box uk-form" onSubmit={this.onSubmit} >
                    <h1 className="uk-container uk-container-expand uk-vertical-align-middle uk-heading">Register</h1>
                    <hr></hr>
                    <div className="uk-container uk-container-expand uk-vertical-align-middle ">
                        <div className="uk-margin uk-margin-bottom uk-margin-top">
                            <div className="uk-inline">
                                <input className="uk-input" type="text" placeholder="Username" name="username" value={this.state.username} onChange={e => this.onChange(e)} />
                            </div>
                            <div className="uk-inline">
                                <input className="uk-input" type="text" placeholder="E-mail" name="email" value={this.state.email} onChange={e => this.onChange(e)}/>
                            </div>
                            <div className="uk-inline">
                                <input className="uk-input" type="password" placeholder="Password" name="password" value={this.state.password} onChange={e => this.onChange(e)}/>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="uk-container uk-container-expand uk-vertical-align-middle ">          
                        <div className="uk-margin uk-margin-top">
                            <div className="uk-inline">
                                <input className="uk-input" type="text" placeholder="First Name" name="firstName" value={this.state.firstName} onChange={e => this.onChange(e)}/>
                            </div>
                            <div className="uk-inline">
                                <input className="uk-input" type="text" placeholder="Last Name" name="lastName" value={this.state.lastName} onChange={e => this.onChange(e)}/>
                            </div>
                            <div className="uk-inline">
                                <input className="uk-input" type="text" placeholder="City" name="city" value={this.state.city} onChange={e => this.onChange(e)}/>
                            </div>
                        </div>
                        <div className="uk-container uk-container-expand uk-vertical-align-middle">     
                            <div className="uk-margin" onChange={this.setGender.bind(this)}>
                                <label><input className="uk-radio" type="radio" name="gender" value ="Male"  /> Male</label>
                                <label><input className="uk-radio" type="radio" name="gender" value ="Female" /> Female</label>
                            </div>
                            <div className="uk-margin">
                                <div className=".uk-button-mini uk-form-select" data-uk-form-select>
                                    <span>Age: </span>
                                    <select>
                                        {options}
                                    </select>
                                </div>
                            </div>
                            <div className="uk-margin">
                                <button className="uk-button uk-button-default" type="submit">REGISTER</button>
                                <br/>
                            </div>
                            <div className = "error uk-margin">
                            <label>{console.log(this.state.errors)}</label>
                            {this.state.errors.map((error,i) => (<p key={i}>{error}</p>)) }
                            </div>
                        </div>
                    </div>
                </form>
        </div>
    )
  }
}
