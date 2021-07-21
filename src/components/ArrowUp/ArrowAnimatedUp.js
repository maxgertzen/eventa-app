import React from 'react';
import './ArrowUp.css';

const ArrowAnimatedUp = ({ ...rest }) => {
    return (<a className="arrow-up" {...rest}>
        <span className="up"></span>
        <span className="up"></span>
    </a>)
}

export default ArrowAnimatedUp;


