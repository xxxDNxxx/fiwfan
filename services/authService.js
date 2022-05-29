import { http } from './HttpService'

export function registerUser(user) {
    return http().post('/users/register', user)
}