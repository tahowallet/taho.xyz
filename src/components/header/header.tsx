import PropTypes from "prop-types";
import React from "react";
import './header.scss';

const Header = ({ siteTitle }: any) => {
  return (
    <div className="header-section">Header</div>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
