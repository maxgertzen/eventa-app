import React, { useState, useEffect } from 'react';
import { updateUserDetails } from '../../../api';
import useForm from '../../../hooks/useForm';
import { validate } from '../../../utils/UserDetailsFormValidation';
import UserInput from './UserInput';

const UserDetails = ({ user }) => {
    const [editMode, setEditMode] = useState(false);
    const {
        handleChange,
        handleSubmit,
        values,
        errors,
        isSubmitting
    } = useForm(updateUserDetails, validate);

    const updateDetails = (e) => {
        setEditMode(!editMode);
        handleSubmit(e)
    }

    return (
        <article>
            <button type="button" onClick={() => setEditMode(!editMode)}>{editMode ? 'Done' : 'Edit'}</button>
            <form id='users' onSubmit={updateDetails}>
                {
                    Object.keys(user).map((key, index) => {
                        return (
                            <UserInput key={index}
                                mode={editMode}
                                content={user[key]}
                                inputProps={
                                    {
                                        type: "text",
                                        handleChange,
                                        value: values[key],
                                        errors
                                    }}
                            />
                        )
                    })
                }
            </form>
        </article>
    )
}