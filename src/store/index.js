import { getUnixTime } from "date-fns";
import Vue from "vue";
import Vuex from "vuex";
import { fetchAllCityService, getForecastService, getLocation, getWeatherData } from '../services/index'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loaderVisible: false,
    forecast: null,
    location: null,
    weatherData: null,
    hourlyData: null,
    allCities: [],
    selectedDate: getUnixTime(new Date())
  },
  getters: {
    getLoaderVisible(state) {
      return state.loaderVisible
    },
    getForecast(state) {
      return state.forecast
    },
    getLocation(state) {
      return state.location
    },
    getWeatherData(state) {
      return state.weatherData
    },
    getSelectedDate(state) {
      return state.selectedDate
    },
    getCurrentDateData(state) {
      if (state.forecast?.current) {
        return state.forecast.current
      }
      return null
    },
    getCurrentDateHourlyData(state) {
      if (state.hourlyData) {
        return state.hourlyData
      }
      return null
    },
    getAllCities(state) {
      return state.allCities
    }
  },
  mutations: {
    showLoader(state, flag) {
      state.loaderVisible = flag
    },
    setForecast(state, data) {
      state.forecast = data
    },
    setLocation(state, location) {
      console.log(location)
      state.location = location
    },
    setWeatherData(state, data) {
      state.weatherData = data
    },
    setHourlyData(state, data) {
      state.hourlyData = data
    },
    setSelectedDate(state, date) {
      state.selectedDate = date
    },
    setAllCities(state, data) {
      state.allCities = data
    }
  },
  actions: {
    showLoader({ commit }, flag) {
      commit('showLoader', flag)
    },
    fetchForecast({ commit }, { lat, lon }) {
      return new Promise(async resolve => {
        try {
          const res = await getForecastService({
            lat,
            lon,
            exclude: 'minutely'
          });
          if (res?.data) {
            commit('setForecast', res.data)
          }
        } catch (e) {
          console.log(e);
        }
        resolve(true)
      })
    },
    fetchWeatherData({ commit }, payload) {
      return new Promise(async resolve => {
        try {
          const res = await getWeatherData(payload)
          if (res.data) {
            commit('setWeatherData', res.data)
          }
          resolve(true)
        }
        catch (e) {
          console.log(e)
          resolve(false)
        }
      })
    },
    fetchLocation({ commit }) {
      return new Promise(async resolve => {
        try {
          const res = await getLocation()
          console.log(res)
          if (res.data) {
            commit('setLocation', res.data)
          }
          resolve(true)
        }
        catch (e) {
          console.log(e)
          resolve(false)
        }
      })
    },
    fetchHourlyForecast({ commit }, { lat, lon, type = 'hour', start, end }) {
      return new Promise(async resolve => {
        try {
          const res = await getForecastService({ lat, lon, start, end, type })
          if (res?.data) {
            commit('setHourlyData', res.data.hourly)
          }
        }
        catch (e) {
          console.log(e)
          resolve(false)
        }
      })
    },
    fetchAllCity({ commit }) {
      return new Promise(async resolve => {
        try {
          const res = await fetchAllCityService();
          if (res?.data) {
            commit('setAllCities', res.data)
          }
        } catch (e) {
          console.log(e);
        }
        resolve(true)
      })
    },
    async resetToCurrentLocation({ dispatch, state }) {
      await dispatch('fetchLocation');
      const { lat, lon } = state.location;
      console.log(this.location);
      await dispatch('fetchWeatherData', { lat, lon });
    }
  }
});
