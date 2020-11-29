import Vue from "vue";
import Vuex from "vuex";
import { getForecastService } from '../services/index'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loaderVisible: false,
    forecast: null,
  },
  getters: {
    getLoaderVisible(state) {
      return state.loaderVisible
    },
    getForecast(state) {
      return state.forecast
    }
  },
  mutations: {
    showLoader(state, flag) {
      state.loaderVisible = flag
    },
    setForecast(state, data) {
      state.forecast = data
    }
  },
  actions: {
    showLoader({ commit }, flag) {
      commit('showLoader', flag)
    },
    async getForecast({ commit }, { lat, lon }) {
      return new Promise(async resolve => {
        try {
          const res = await getForecastService({
            lat,
            lon,
            exclude: 'hourly,current,minutely,alerts',
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
  }
});
