<template>
    <form @submit.prevent="onSubmit">
        <input type="search" placeholder="Enter model or name" v-model="searchText" />
        <button>Search</button>
    </form>
</template>

<script>
    export default {
        name: 'SearchArea',
        data() {
            return {
                searchText: "",
            }
        },
        methods: {
            onSubmit() {
                this.$emit('search-starship', this.searchText)
            },
        }
    }   
</script>

<style lang="scss" scoped>
    form {
        border: 1px solid red;
    }
</style>