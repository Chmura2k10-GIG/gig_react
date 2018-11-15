import React from 'react';
import gigLogo from '../assets/images/GigLogoOrange.png'
const FooterComponent = () => {
  return(
    <footer className="footer">
      <div className="uk-flex uk-flex-middle">
        <img className="footer__logo" src={gigLogo} alt="footer-logo" />
        <span className="text--orange uk-text-uppercase uk-margin-small-left">Powered by K & P & R</span>
      </div>
    </footer>
  )
}

export default FooterComponent;