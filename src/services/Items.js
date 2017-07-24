import axios from 'axios'

export function search(query, limit) {
    return axios.get(`http://localhost:3000/api/items?q=${query}&limit=${limit}`)
}

export function get(id) {
    return axios.get(`http://localhost:3000/api/items/${id}`)
}
