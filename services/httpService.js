import axios from 'axios'

export function http() {
    return axios.create({
        baseURL: 'http://206.189.154.219:8085/api/v2',

    })
}