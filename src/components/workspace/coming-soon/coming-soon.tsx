import PropTypes from "prop-types";
import React from "react";
import './coming-soon.scss';

const ComingSoon = ({ children }: any) => {
    return <>
        <div className="coming-soon">
            <div className="coming-soon__btn">
                <div className="coming-soon__btn-text">Coming soon</div>
            </div>
            <div className="coming-soon__info">Community owned & operated wallet.</div>
        </div>
    </>
};

ComingSoon.propTypes = {
};

export default ComingSoon;
