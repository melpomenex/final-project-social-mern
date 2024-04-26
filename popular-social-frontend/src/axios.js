import axios from 'axios'

const instance = axios.create({
    baseURL: "https://final-project-mern-5805ebc18965.herokuapp.com"
})
export default instance
