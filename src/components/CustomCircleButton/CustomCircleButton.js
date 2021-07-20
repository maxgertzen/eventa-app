import React from 'react';
import styled from 'styled-components';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const CircleButton = styled.div`
    height: ${props => `${props.size}px`};
    width: ${props => `${props.size}px`};
    border-radius: 50%;
    background-color: #279B52;
    color: white;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: filter 0.15s linear;
    svg {
        margin-bottom: 0.5px;
    };
    filter: hue-rotate(45deg);

    :hover {
        filter: hue-rotate(0deg);
    }

`

const CustomCircleButton = ({ size, title, children, ...rest }) => {
    return (<OverlayTrigger placement="bottom" overlay={<Tooltip>{title}</Tooltip>}>
        {({ ref, ...triggerHandler }) => (
            <CircleButton size={size} ref={ref} {...triggerHandler} {...rest}>
                {children}</CircleButton>
        )}
    </OverlayTrigger>)
}

export default CustomCircleButton