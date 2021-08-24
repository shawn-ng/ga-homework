import axios from 'axios'

const baseURL = 'https://ga-winebored.herokuapp.com'

// Getting wine api

export const WinesApi = () => {
  return axios.get(`${baseURL}/wines`)
}

export const SingleWineApi = (id) => {
  return axios.get(`${baseURL}/wines/${id}`)
}

// AUTH API

export const RegisterUser = (formData) => {
  return axios.post(`${baseURL}/register`, formData)
}

export const LoginUser = (formData) => {
  return axios.post(`${baseURL}/login`, formData)
}

// ADD new wine
export const NewWine = (formData) => {
  return axios.post(`${baseURL}/wines`, formData)
}
