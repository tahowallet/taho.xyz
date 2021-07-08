import PropTypes from "prop-types";
import React from "react";
import './footer.scss';

const Footer = ({ siteTitle }: any) => {
  return (
    <div className="footer-section">Footer</div>
  );
};

Footer.propTypes = {
  siteTitle: PropTypes.string,
};

Footer.defaultProps = {
  siteTitle: ``,
};

export default Footer;
