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
        const response = await axios.post(`${URL}/events/cr`, newEvent, {
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

export const updateUserDetails = async (userDetails, path) => {
    try {

    } catch (error) {
        console.error(error)
    }
}