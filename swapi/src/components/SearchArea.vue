<template>
  <form @submit.prevent="onSubmit">
    <input
      type="search"
      placeholder="Enter model or name"
      v-model="searchText"
      class="search-input"
    />
    <button class="search-btn">Search</button>
  </form>
</template>

<script>
export default {
  name: "SearchArea",

  data() {
    return {
      searchText: "",
    };
  },

  methods: {
    onSubmit() {
      this.$emit("search-starship", this.searchText);
    },
  },
};
</script>

<style lang="scss" scoped>
form {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 5px 0;
  background: radial-gradient(
    circle,
    rgb(66, 65, 62) 80%,
    rgba(0, 0, 0, 1) 100%
  );

  .search-input {
    width: 60%;
    padding: 16px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #0e0e0c;
    border-radius: 8px;
    box-sizing: border-box;
    color: #fce854;
    background-color: #141413;

    &:focus {
      outline: none;
    }
  }

  .search-btn {
    background-color: #fce854;
    border: none;
    color: #000;
    padding: 15px 32px;
    text-align: center;
    margin: 4px 2px;
    border-radius: 8px;
  }
}
</style>
