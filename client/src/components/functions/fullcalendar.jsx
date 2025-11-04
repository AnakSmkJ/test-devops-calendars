import axios from 'axios'


export const createEvent = async (values) =>
    await axios.post(import.meta.env.VITE_API_URL+'/event',values)

export const listEvent = async () =>
    await axios.get(import.meta.env.VITE_API_URL+'/event')

export const handleCurrentMonth = async (values) =>
    await axios.post(import.meta.env.VITE_API_URL+'/current-month',values)