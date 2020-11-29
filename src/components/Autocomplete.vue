<template>
  <div class="d-block position-relative">
    <div class="input-group bg-white" @click.stop>
      <span class="input-group-prepend icon">
        <img
          src="@/assets/icons/location-pin.svg"
          alt="location"
          class="img-fluid"
        />
      </span>
      <input
        class="form-control"
        placeholder="Search by city and country"
        v-model="searchText"
        @focus="handleFocus"
        autocomplete="off"
        role="combobox"
      />
      <span class="input-group-append icon">
        <img src="@/assets/icons/search.svg" alt="location" class="img-fluid" />
      </span>
    </div>
    <div class="autocomplete" v-show="focused">
      <li class="list-group-item" v-if="filtered.length === 0">
        {{
          searchText.length > 1
            ? 'No results found'
            : 'Start typing city or country name'
        }}
      </li>
      <ul class="list-group" v-else>
        <result-item
          :search="searchText"
          v-for="(result, index) in filteredData"
          :key="'result_' + index"
          :result="result"
        />
      </ul>
    </div>
  </div>
</template>
<script>
import ResultItem from './ResultItem';
import { getWeatherData } from '@/services';
import { mapActions } from 'vuex';

export default {
  name: 'Autocomplete',
  props: {
    search: String,
    data: Array,
  },
  components: { ResultItem },
  data() {
    return {
      searchText: '',
      focused: false,
      filteredData: [],
    };
  },
  watch: {
    search(s) {
      if (s) this.searchText = s;
    },
    async filtered(d) {
      const res = await Promise.all(d);
      this.filteredData = res;
    },
  },
  computed: {
    filtered() {
      if (this.searchText.length > 2) {
        const filtered = this.data.filter((city) => {
          return (
            city.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
            city.country.toLowerCase().includes(this.searchText.toLowerCase())
          );
        });
        // .splice(0, 5);
        return filtered.map(async (el) => {
          try {
            const { coord } = el;
            const res = await getWeatherData(coord);
            if (res?.data) {
              el.weatherData = res.data;
            }
            return el;
          } catch (e) {
            console.log(e);
          }
        });
      }
      return [];
    },
  },
  methods: {
    ...mapActions(['resetToCurrentLocation']),
    handleFocus() {
      this.focused = true;
    },
  },
  mounted() {
    document.documentElement.addEventListener('click', (e) => {
      if (!this.$el.contains(e.currentTarget)) {
        this.focused = false;
        if (this.search.length < 2) {
          this.resetToCurrentLocation();
        }
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.list-group-item {
  cursor: pointer;
}
.autocomplete {
  position: absolute;
  width: 100%;
  max-height: 300px;
  z-index: 10;
  .list-group {
    border-radius: 0.5rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }
}
.input-group {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  padding: 0.5rem;
  border-radius: 0.65rem;
  display: flex;
  align-items: center;
  .input-group-append,
  .input-group-prepend {
    align-items: center;
    padding: 0.25rem;
  }
  .form-control {
    border: none;
    &:focus {
      box-shadow: none;
    }
  }
}
</style>
