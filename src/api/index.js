import axios from "axios"

const URL = 'http://localhost:3100'
const HEADERS = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:3100'
}

export const addLogUser = async (user, path) => {
    try {
        const response = await axios(`${URL}/auth/${path}`, {
            method: 'post',
            headers: HEADERS,
            data: user,
            withCredentials: true
        })
        if (response.ok) {
            return response
        }
    } catch (error) {
        console.error(error)
    }
}

export const addEvent = async (newEvent) => {
    try {
        const response = await axios.post(`${URL}/events`, newEvent, {
            headers: HEADERS,
            withCredentials: true
        });
        if (response.ok) {
            return response;
        }
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