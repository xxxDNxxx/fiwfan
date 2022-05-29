import { http } from './HttpService'

export function getAllPosts() {
    return http().get('/users/findallpost')
}

export function getPostById(id) {
    return http().get(`/users/findpostbyid/${id}`)
}