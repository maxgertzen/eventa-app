import React from 'react';

const DateFormat = ({ dateString }) => {
    return (
        dateString && (<time>
            {`${new Date(dateString).getUTCDate()}/${new Date(dateString).getUTCMonth()}/${new Date(dateString).getFullYear()}`}
        </time>)
    )
}

export default DateFormat