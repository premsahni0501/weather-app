import Axios from "axios";

const OWM_API_KEY = 'cfec61aa4d6a9d16646f15db722c1379'

export const ipLookUp = async () => Axios.get('http://ip-api.com/json')

export const getLocation = () => {
  return new Promise(resolve => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          resolve({
            data: {
              lat: latitude,
              lon: longitude
            }
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

export const getForecastService = ({ lat, lon, month, day, exclude }) => {
  let query = lat ? `lat=${lat}&lon=${lon}&` : ''
  query += `month=${month}&`
  query += `day=${day}&`
  query += `exclude=${exclude}&`
  query += `appid=${OWM_API_KEY}&units=metric`

  return Axios.get(`//api.openweathermap.org/data/2.5/onecall?${query}`)
}

export const fetchAllCityService = () => Axios.get('/json/city.list.json')

export const getHourlyForecastService = ({ lat, lon, type, start, end }) =>
  Axios.get(`//history.openweathermap.org/data/2.5/history/city?type=${type}&start=${start}&end=${end}&units=metric&lat=${lat}&lon=${lon}&appid=${'cfec61aa4d6a9d16646f15db722c1379'}`)