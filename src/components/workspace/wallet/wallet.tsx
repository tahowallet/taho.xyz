import PropTypes from "prop-types";
import React from "react";
import "./wallet.scss";

const Wallet = ({ children }: any) => {
  return (
    <>
      <div className="wallet">
        <div className="wallet__browser"></div>
        <div className="wallet__panel"></div>
      </div>
    </>
  );
};

Wallet.propTypes = {};

export default Wallet;
