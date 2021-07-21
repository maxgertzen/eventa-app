import React from 'react';
import './ArrowDown.css';

const ArrowAnimatedDown = ({ ...rest }) => {
    return (<a className="arrow-down" {...rest}>
        <span className="down"></span>
        <span className="down"></span>
    </a>)
}

export default ArrowAnimatedDown;


