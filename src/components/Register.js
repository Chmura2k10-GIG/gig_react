import React, { Component } from 'react'

export default class Register extends Component {
  render() {
    return (
        <div >
            <div class="uk-container uk-container-expand">
                <img class="uk-align-left logo-img" src={require('./../assets/images/GigLogoOrange.png')} alt="" />
            </div>
                <form class="uk-panel uk-panel-box uk-form">
                    <h1 class="uk-container uk-container-expand uk-vertical-align-middle uk-heading">Register</h1>
                    <hr></hr>
                    <div class="uk-container uk-container-expand uk-vertical-align-middle ">
                        <div class="uk-margin uk-margin-bottom uk-margin-top">
                            <div class="uk-inline">
                                <input class="uk-input" type="text" placeholder="Username"/>
                            </div>
                            <div class="uk-inline">
                                <input class="uk-input" type="text" placeholder="E-mail"/>
                            </div>
                        </div>
                    </div>
                    <hr uk-divider-vertical></hr>
                    <div class="uk-container uk-container-expand uk-vertical-align-middle ">          
                        <div class="uk-margin uk-margin-top">
                            <div class="uk-inline">
                                <input class="uk-input" type="password" placeholder="Password"/>
                            </div>
                            <div class="uk-inline">
                                <input class="uk-input" type="password" placeholder="Repeat Password"/>
                            </div>
                    </div>
                        <div class="uk-container uk-container-expand uk-vertical-align-middle">     
                            <div class="uk-margin">
                                <button class="uk-button uk-button-default">REGISTER</button>
                            </div>
                        </div>
                    </div>
                </form>
        </div>
    )
  }
}
