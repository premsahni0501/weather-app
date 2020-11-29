import Axios from "axios";

const OWM_API_KEY = '6cf165b7f0475cb33bea17e408bfa193'

export const ipLookUp = async () => Axios.get('http://ip-api.com/json')

export const getLocation = () => {
  return new Promise(resolve => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          resolve({
            lat: latitude,
            lon: longitude
          })
        },
        (error_message) => {
          console.log('An error has occured while retrieving location', error_message)
          resolve(ipLookUp())
        }
      );
    } else {
      console.log('geolocation is not enabled on this browser')
      resolve(ipLookUp())
    }
  })
}

export const getWeatherData = ({ q, lat, lon }) => {
  let query = q ? `q=${q}&` : ''
  query += lat ? `lat=${lat}&lon=${lon}&` : ''
  query += `appid=${OWM_API_KEY}&units=metric`
  return Axios.get(`//api.openweathermap.org/data/2.5/weather?${query}`)
}

export const getForecastService = ({ lat, lon, exclude }) =>
  Axios.get(`//api.openweathermap.org/data/2.5/onecall?exclude=${exclude}&units=metric&cnt=5&lat=${lat}&lon=${lon}&appid=${OWM_API_KEY}`)