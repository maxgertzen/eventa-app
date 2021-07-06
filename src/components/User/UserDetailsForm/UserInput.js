import React from 'react';

const UserInput = ({ mode, inputProps, content }) => {

    const renderInput = () => {
        return (
            <div className="input-group">
                <input type={inputProps.type} onChange={inputProps.handleChange} value={inputProps.value} />
                <div className="errors">{inputProps.errors.forEach(err => err)}</div>
            </div>
        )
    }


    return (
        <div className="user-details">
            {
                !mode
                    ?
                    content
                    :
                    renderInput()
            }
        </div>
    )
}

export default UserInput;