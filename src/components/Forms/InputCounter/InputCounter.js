import React from 'react';

const InputCounter = ({ count, max }) => {
    return (
        <span style={{ float: 'right', fontSize: 'smaller' }}>[{count?.length} / {max}]</span>
    )
}

export default InputCounter