import PropTypes from "prop-types";
import React from "react";
import './join-hunt.scss';

const JoinHunt = ({ children }: any) => {

    return <>
        <div className="join-hunt">
            <div className="join-hunt__text">Get notified to be one of the first to use Tally.</div>
            <form className="join-hunt__email">
                <input className="join-hunt__form" placeholder="your@email.com"></input>
                <button className="join-hunt__btn">Join the hunt</button>
            </form>
        </div>
    </>
};

JoinHunt.propTypes = {
};

export default JoinHunt;