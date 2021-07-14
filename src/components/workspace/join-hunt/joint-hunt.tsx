import PropTypes from "prop-types";
import React from "react";
import './join-hunt.scss';

const JoinHunt = ({ children }: any) => {

    return <>
        <div className="join-hunt">
            <div className="join-hunt__text">Get notified to be one of the first to use Tally.</div>
            <form className="join-hunt__email" action="https://cash.us6.list-manage.com/subscribe/post" method="POST">
                <input type="hidden" name="u" value="983d6d90b75437835165c3937"/>
                <input type="hidden" name="id" value="cbe670acb1"/>
                <input required className="join-hunt__form" placeholder="your@email.com" name="MERGE0" id="MERGE0"></input>
                <button className="join-hunt__btn action-btn">Join the hunt</button>
            </form>
        </div>
    </>
};

JoinHunt.propTypes = {
};

export default JoinHunt;