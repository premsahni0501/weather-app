import axios from 'axios'
import store from '../store'

// Request interceptor
axios.interceptors.request.use(request => {
  store.dispatch('showLoader', true)
  return request
})

// Response interceptor
axios.interceptors.response.use(response => {
  setTimeout(() => store.dispatch('showLoader', false), 200)
  return response
}, async error => {
  setTimeout(() => store.dispatch('showLoader', false), 200)
  return Promise.reject(error.response)
})
