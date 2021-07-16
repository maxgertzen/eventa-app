import React from 'react';

const TimeFormat = ({ dateString }) => {
    return (
        <>
            {dateString && (<time>
                {`${new Date(dateString).getHours()}:${(new Date(dateString).getMinutes() < 10 ? '0' : '') + new Date(dateString).getMinutes()}`}
            </time>)}
        </>
    )
}

export default TimeFormat