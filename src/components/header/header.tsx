import PropTypes from "prop-types";
import React from "react";
import './header.scss';

const Header = ({ siteTitle }: any) => {
  return (
    <div className="header-section">
      <div className="header-section__logo"></div>
      <div className="header-section__links">
        <div className="header-section__link header-section__link_discord"><p></p></div>
        <div className="header-section__link header-section__link_twitter"></div>
        <div className="header-section__link header-section__link_github"></div>
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
