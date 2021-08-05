import PropTypes from "prop-types";
import React from "react";
import './header.scss';

const Header = ({ siteTitle }: any) => {
  return (
    <div className="header-section">
      <div className="header-section__logo"></div>
      <div className="header-section__links">
        <a href="https://chat.tally.cash" target="_blank" className="header-section__link header-section__link_discord"></a>
        <a href="https://twitter.com/tallycash" target="_blank" className="header-section__link header-section__link_twitter"></a>
        <a href="https://github.com/tallycash" target="_blank" className="header-section__link header-section__link_github"></a>
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
