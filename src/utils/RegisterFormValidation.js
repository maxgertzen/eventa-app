const validators = {
    email: {
        required: true,
        pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
    },
    password: {
        required: true,
        pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    }
}


export const validate = (values) => {
    const errors = {}
    for (const name in values) {
        if (!(name in errors)) errors[name] = []
        if (validators[name].pattern && !validators[name].pattern.test(values[name])) {
            errors[name].push(`Invalid ${name.replace("-", " ")}`)
        }

        if (validators[name].required && !values[name]) {
            errors[name].push(`required*`)
        }
    }
    return errors
}

export const validateDataOnSubmit = (formValues) => {
    const validator = {}
    for (const name in validators) {
        if (name in formValues) {
            const { value } = formValues[name]
            const newErrors = validate({ target: { value, name } })
            validator[name] = {
                value,
                errors: newErrors
            }
        }
    }

    return validator
}