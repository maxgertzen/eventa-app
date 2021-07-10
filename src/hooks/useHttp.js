import { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3100';
axios.defaults.headers = {
    'Access-Control-Allow-Origin': 'http://localhost:3100'
};
axios.defaults.withCredentials = true;

export const useHttp = (methodParams) => {
    const [response, setResponse] = useState(undefined);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    const fetchData = async (params) => {
        try {
            const res = await axios.request(params);
            setResponse(res.data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData(methodParams);
    }, []);

    return { response, error, loading }
}

