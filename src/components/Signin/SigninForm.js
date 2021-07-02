import React from 'react';

const SigninForm = ({ formAction, handleSubmit }) => {
    return (
        <form action={`/${formAction}`} method='post' id={formAction} onSubmit={handleSubmit}>
            <input type="email" name="email" placeholder="Enter Email" />
            <input type="password" name="password" placeholder="Enter Password" />
            <button type="submit">
                {formAction}
            </button>
        </form>
    )
}

export default SigninForm;