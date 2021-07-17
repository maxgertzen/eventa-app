import React from 'react';

const UserProfilePage = ({ info }) => {
    return (
        <article>
            <h1>User Profile Page</h1>
            {JSON.stringify(info)}
        </article>
    )
}

export default UserProfilePage