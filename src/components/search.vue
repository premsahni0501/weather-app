<template>
  <div class="py-3">
    <autocomplete
      :search="search"
      placeholder="Search for a city"
      aria-label="Search for a city"
    >
      <template
        #default="{
          rootProps,
          inputProps,
          inputListeners,
          resultListProps,
          resultListListeners,
          results,
          resultProps,
        }"
      >
        <div v-bind="rootProps">
          <div class="input-group bg-white">
            <span class="input-group-prepend icon">
              <img
                src="@/assets/icons/location-pin.svg"
                alt="location"
                class="img-fluid"
              />
            </span>
            <input
              v-bind="inputProps"
              v-on="inputListeners"
              :class="[
                'form-control',
                { 'autocomplete-input-no-results': noResults },
              ]"
              v-model="searchText"
              @focus="handleFocus"
              @blur="handleBlur"
            />
            <span class="input-group-append icon">
              <img
                src="@/assets/icons/search.svg"
                alt="location"
                class="img-fluid"
              />
            </span>
          </div>
          <ul
            v-if="noResults"
            class="autocomplete-result-list"
            style="position: absolute; z-index: 1; width: 100%; top: 100%"
          >
            <li class="autocomplete-result">No results found</li>
          </ul>
          <ul v-bind="resultListProps" v-on="resultListListeners">
            <li
              v-for="(result, index) in results"
              :key="resultProps[index].id"
              v-bind="resultProps[index]"
            >
              {{ result }}
            </li>
          </ul>
        </div>
      </template>
    </autocomplete>
  </div>
</template>
<script>
import Autocomplete from '@trevoreyre/autocomplete-vue';
import '@trevoreyre/autocomplete-vue/dist/style.css';

export default {
  name: 'Search',
  props: {
    data: Object,
  },
  watch: {
    data(d) {
      if (d) this.inputProps.search = d.name;
    },
  },
  data() {
    return {
      noResults: false,
      inputProps: {},
      searchText: '',
      results: [],
    };
  },
  components: {
    Autocomplete,
  },
  methods: {
    search(input) {
      if (input.length < 1) {
        return [];
      }
      return this.results.filter((city) => {
        return city.toLowerCase().startsWith(input.toLowerCase());
      });
    },
    handleFocus() {},
    handleBlur() {},
  },
  mounted() {
    console.log(this.data);
    if (this.data?.name)
      this.searchText = this.data.name + ', ' + this.data.sys.country;
  },
};
</script>
<style lang="scss" scoped>
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
.autocomplete[data-loading='true'] {
  .input-group-append {
    display: none;
  }
}
</style>
