import axios from "axios"
import { baseUrl } from "../config/index"
export function Login(params) {
    const url = baseUrl + '/user/login'
    return axios.post(url, params)
}