import React from 'react';
import styled from 'styled-components';

const Switch = styled.label`
    position: relative;
    display: inline-block;
    width: 34px;
    height: 20px;
    display: block;
    margin-top: 0.5rem;

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: 0.4s;
        transition: 0.4s;
    }
    
    input {
        opacity: 0;
	    width: 0;
	    height: 0;
    }
    .slider:before {
        position: absolute;
        content: '';
        height: 18px;
        width: 18px;
        left: 1px;
        bottom: 1px;
        background-color: white;
        -webkit-transition: 0.4s;
        transition: 0.4s;
    }
    
    input:checked + .slider {
        background-color: #279B52;
    }
    
    input:focus + .slider {
        box-shadow: 0 0 1px #279B52;
    }
    
    input:checked + .slider:before {
        -webkit-transform: translateX(14px);
        -ms-transform: translateX(14px);
        transform: translateX(14px);
    }
    
    /* Rounded sliders */
    .slider.round {
        border-radius: 34px;
    }
    
    .slider.round:before {
        border-radius: 50%;
    }

`


const SwitchButton = ({ ...rest }) => {
    return (
        <Switch>
            <input {...rest} />
            <span className="slider round"></span>
        </Switch>
    )
}

export default SwitchButton