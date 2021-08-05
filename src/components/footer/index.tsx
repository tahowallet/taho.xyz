import PropTypes from "prop-types";
import React from "react";
import "./footer.scss";

const Footer = ({}: any) => {
  return (
    <>
      <div className="footer-section">
        <div className="footer-section__logo">
          <p></p>
        </div>
        <div className="footer-section__heading">TALLY HO!</div>
        <div className="footer-section__links">
          <a href="https://chat.tally.cash" target="_blank" className="footer-section__link footer-section__link_discord">
            <div className="footer-section__discord discord-icon"></div>
            Discord
          </a>
          <a href="https://twitter.com/tallycash" target="_blank" className="footer-section__link footer-section__link_twitter">
            <div className="footer-section__twitter twitter-icon"></div>
            Twitter
          </a>
          <a href="https://github.com/tallycash" target="_blank" className="footer-section__link footer-section__link_github">
            <div className="footer-section__github github-icon"></div>
            GitHub
          </a>
        </div>
        <div className="footer-section__sign">© 2021 | A <a href="https://thesis.co">Thesis*</a> Build</div>
      </div>
    </>
  );
};

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
