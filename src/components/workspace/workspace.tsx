import PropTypes from "prop-types";
import React from "react";
import './workspace.scss';
import ComingSoon from "./coming-soon/coming-soon";
import JoinHunt from "./join-hunt/joint-hunt";
import Wallet from "./wallet/wallet";

const Workspace = ({ children }: any) => {
    return <>
    <div className="workspace-section">
        <div className="workspace-section__coming-soon"><ComingSoon></ComingSoon></div>
        <div className="workspace-section__join-hunt"><JoinHunt></JoinHunt></div>
        <div className="workspace-section__wallet"><Wallet></Wallet></div>
    </div>
    </>
};

Workspace.propTypes = {
};

export default Workspace;
