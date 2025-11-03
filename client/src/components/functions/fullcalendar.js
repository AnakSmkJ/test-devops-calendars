import axios from 'axios'


export const createEvent = async (values) =>
    await axios.post(process.env.REACT_APP_API+'/event',values)

export const listEvent = async () =>
    await axios.get(process.env.REACT_APP_API+'/event')

export const handleCurrentMonth = async (values) =>
    await axios.post(process.env.REACT_APP_API+'/current-month',values)