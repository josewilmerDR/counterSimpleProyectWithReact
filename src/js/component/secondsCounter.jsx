import React from "react";
import PropTypes from "prop-types";

const SecondsCounter = (props) => {
    return (
        <>
            <div className="bigCounter">
                <div><i className="fa-regular fa-clock"></i></div>
                <div>{props.digitSix}</div>
                <div>{props.digitFive}</div>
                <div>{props.digitFour}</div>
                <div>{props.digitThree}</div>
                <div>{props.digitTwo}</div>
                <div>{props.digitOne}</div>
            </div>
        </>
    )
}

SecondsCounter.propTypes = {
    digitOne: PropTypes.number,
    digitTwo: PropTypes.number,
    digitThree: PropTypes.number,
    digitFour: PropTypes.number,
    digitFive: PropTypes.number,
    digitSix: PropTypes.number,
}
export default SecondsCounter;