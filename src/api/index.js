import axios from "axios"


const URL = 'http://localhost:3100'
const HEADERS = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:3100'
};

export const addLogUser = async (user, path) => {
    try {
        const response = await axios(`${URL}/auth/${path}`, {
            method: 'post',
            headers: HEADERS,
            data: user,
            withCredentials: true
        })
        return response
    } catch (error) {
        console.error(error)
        return error.response.data
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
        return error.response.data;
    }
}

export const getEvents = async (filter) => {
    try {
        let getURL = filter ? `${URL}/events/s` : `${URL}/events`;
        const data = await axios.get(getURL, {
            params: { search: filter }
        })
        return data
    } catch (error) {
        console.error(error)
        return error.response.data
    }
}
export const getEventById = async (eventId) => {
    try {
        const data = await axios.get(`${URL}/events/${eventId}`)
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
        console.log(data)
        return data
    } catch (error) {
        console.error(error)
    }
}

export const updateUserDetails = async (userDetails, path) => {
    try {

    } catch (error) {
        console.error(error)
    }
}

export const deleteEvent = async (eventId) => {
    try {
        const data = await axios.delete(`${URL}/events/${eventId}`, {
            headers: HEADERS,
            withCredentials: true
        })
        console.log(data)
        return data
    } catch (error) {
        console.error(error)
    }
}

export const getCountries = async () => {
    try {
        const data = await axios.get(`${URL}/venues/countries`);
        return data;
    } catch (error) {
        console.error(error)
    }
}

export const getCities = async (countryCode) => {
    try {
        const data = await axios.get(`${URL}/venues/${countryCode}/cities`);
        return data;
    } catch (error) {
        console.error(error)
    }
}
