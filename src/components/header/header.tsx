import PropTypes from "prop-types";
import React from "react";
import './header.scss';

const Header = ({ siteTitle }: any) => {
  return (
    <div className="header-section">
      <div className="header-section__logo"></div>
      <div className="header-section__links">
        <div className="header-section__link header-section__link_discord discord-icon"></div>
        <div className="header-section__link header-section__link_twitter twitter-icon"></div>
        <div className="header-section__link header-section__link_github github-icon"></div>
      </div>
    </div>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
