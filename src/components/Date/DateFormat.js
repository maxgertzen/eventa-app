import React from 'react';

const DateFormat = ({ dateString, long, ...rest }) => {
    return (
        <>
            {dateString && (
                <time {...rest}>
                    {
                        !long ? `${new Date(dateString).getUTCDate()}/${new Date(dateString).getUTCMonth() + 1}` :
                            `${new Date(dateString).toDateString()}`
                    }
                </time>)}
        </>
    )
}

export default DateFormat