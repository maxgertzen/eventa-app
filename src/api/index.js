const URL = 'http://localhost:3100'

export const addLogUser = async (user, path) => {
    try {
        const response = await fetch(`${URL}/auth/${path}`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user),
        })
        if (response.ok) {
            return {
                data: await response.json(),
                status: response.ok
            }
        }
        return response.json()
    } catch (error) {
        console.error(error)
    }
}
