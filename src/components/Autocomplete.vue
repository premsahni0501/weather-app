<template>
  <div class="d-block position-relative">
    <div class="input-group bg-white">
      <span class="input-group-prepend icon">
        <img
          src="@/assets/icons/location-pin.svg"
          alt="location"
          class="img-fluid"
        />
      </span>
      <input
        class="form-control"
        v-model="searchText"
        @focus="handleFocus"
        @blur="handleBlur"
        @change="handleChange"
      />
      <span class="input-group-append icon">
        <img src="@/assets/icons/search.svg" alt="location" class="img-fluid" />
      </span>
    </div>
    <div class="autocomplete" v-show="focused">
      <ul
        v-if="filtered.length === 0"
        class="autocomplete-result-list"
        style="position: absolute; z-index: 1; width: 100%; top: 100%"
      >
        <li class="autocomplete-result">No results found</li>
      </ul>
      <ul class="list-group" v-else>
        <li
          v-for="(result, index) in filtered"
          :key="'result_' + index"
          class="list-group-item"
        >
          {{ result }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Autocomplete',
  props: {
    search: String,
    data: Array,
  },
  data() {
    return {
      searchText: '',
      focused: false,
    };
  },
  watch: {
    search(s) {
      this.searchText = s;
    },
  },
  computed: {
    filtered() {
      if (this.searchText.length > 1) {
        console.log(this.data);
        return this.data.filter((city) => {
          return (
            city.name.includes(this.searchText) ||
            city.country.includes(this.searchText)
          );
        });
      }
      return [];
    },
  },
  methods: {
    handleChange() {},
    handleFocus() {
      this.focused = this.searchText.length > 1;
    },
    handleBlur() {
      this.focused = false;
    },
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
