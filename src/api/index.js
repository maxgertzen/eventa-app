const URL = 'http://localhost:3100'

export const addLogUser = async (user, path) => {
    try {
        const response = await fetch(`${URL}/${path}`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
        console.log(response);
    } catch (error) {
        console.error(error)
    }
}
