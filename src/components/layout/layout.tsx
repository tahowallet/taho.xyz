/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import PropTypes from "prop-types";
import React from "react";
import "../../assets/styles/_variables.scss";
import Footer from "../footer/footer";
import Header from "../header/header";
import "./layout.scss";

const Layout = ({ children }: any) => {
  return (
    <div className="shell">
      <div className="shell__header"><Header></Header></div>
      <div className="shell__main"><>{children}</></div>
      <div className="shell__footer"><Footer></Footer></div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
