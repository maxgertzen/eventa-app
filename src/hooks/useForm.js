import { useState, useEffect } from "react";

const useForm = (callback, validate) => {
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [path, setPath] = useState('')

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback(values, path).then((data) => setIsSubmitting(false));
        }
    }, [errors])

    const handleSubmit = (event) => {
        if (event) event.preventDefault();
        setErrors(validate(values));
        setPath(event.target.id)
        setIsSubmitting(true);
    };

    const handleChange = (event) => {
        event.persist();
        setValues(values => ({
            ...values,
            [event.target.name]: event.target.value
        }));
        setErrors(validate(values))
    };

    return {
        handleChange,
        handleSubmit,
        values,
        errors,
        isSubmitting
    }
};

export default useForm