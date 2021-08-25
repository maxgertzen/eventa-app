import axios from "axios"


const URL = process.env.REACT_APP_SERVER_URL
const HEADERS = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': URL,
    'Access-Control-Allow-Credentials': 'true'
};

export const addLogUser = async (user, path) => {
    try {
        const response = await axios.post(`${URL}/auth/${path}`, user, {
            headers: HEADERS,
            withCredentials: true
        })
        console.log('RESPONSE ', response)
        return response
    } catch (error) {
        console.log('ERROR ', error)
        console.log(error)
        console.error(error.response)
        return error.response
    }
}

export const saveEventToUser = async (id, userId) => {
    try {
        const response = await axios.post(`${URL}/events/save/${id}`, userId, {
            withCredentials: true
        })
        return response
    } catch (error) {
        console.error(error.response)
        return error.response
    }
}

export const checkEmailAvailability = async (email) => {
    try {
        await axios.post(`${URL}/auth/email`, { email });
        return true;
    } catch (error) {
        console.error(error);
        return false
    }
}

export const addEvent = async (newEvent) => {
    try {
        const response = await axios.post(`${URL}/events/create`, newEvent, {
            headers: HEADERS,
            withCredentials: true
        });
        return response;
    } catch (error) {
        console.error(error)
        return error;
    }
}

export const getEvents = async (filter) => {
    try {
        console.log(filter)
        const data = await axios.get(`${URL}/events/all`, {
            params: { search: filter },
            withCredentials: true
        })
        console.log(data)
        return data
    } catch (error) {
        console.error(error)
        return error.response.data
    }
}
export const getEventById = async (eventId) => {
    try {
        const data = await axios.get(`${URL}/events/${eventId}`)
        console.log(data)
        return data
    } catch (error) {
        console.error(error)
        return error.response.data
    }
}

export const getUserEvents = async () => {
    try {
        const data = await axios.get(`${URL}/events/dashboard`, {
            headers: HEADERS,
            withCredentials: true
        })
        return data
    } catch (error) {
        console.error(error)
        return error.response.data
    }
}

export const getUserDetails = async () => {
    try {
        const data = await axios.get(`${URL}/users/dashboard`, {
            headers: HEADERS,
            withCredentials: true
        })
        return data
    } catch (error) {
        console.error(error)
        return error.response.data
    }
}

export const updateUserDetails = async (userId, userDetails) => {
    try {
        const data = await axios.put(`${URL}/users/dashboard/${userId}`, userDetails, {
            headers: HEADERS,
            withCredentials: true
        })
        return data
    } catch (error) {
        console.error(error)
        return error.response.data
    }
}

export const deleteEvent = async (eventId) => {
    try {
        const data = await axios.delete(`${URL}/events/${eventId}`, {
            headers: HEADERS,
            withCredentials: true
        })
        return data
    } catch (error) {
        console.error(error)
        return error.response.data
    }
}

export const editEvent = async (eventId, newData) => {
    try {
        const data = await axios.put(`${URL}/events/${eventId}`, newData, {
            headers: HEADERS,
            withCredentials: true
        });
        return data
    } catch (error) {
        console.error(error)
        return error.response.data
    }
}

export const getCountries = async () => {
    try {
        const data = await axios.get(`${URL}/venues/countries`);
        return data;
    } catch (error) {
        console.error(error)
        return error.response.data
    }
}

export const getCities = async (countryCode) => {
    try {
        const data = await axios.get(`${URL}/venues/${countryCode}/cities`);
        return data;
    } catch (error) {
        console.error(error)
        return error.response.data
    }
}
export const getCategories = async () => {
    try {
        const { data } = await axios.get(`${URL}/events/categories`);
        console.log(data)
        return data;
    } catch (error) {
        console.error(error)
        return error.response.data
    }
}

export const checkUserVerification = async (search) => {
    try {
        const { data } = await axios.post(`${URL}/auth/verification`, {
            params: {
                token: search.get('token'),
                email: search.get('email')
            }
        })
        return data
    } catch (error) {
        return error.response.data
    }
}