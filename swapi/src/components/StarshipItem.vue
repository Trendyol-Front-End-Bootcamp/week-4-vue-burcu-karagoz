<template>
    <router-link :to="{ name: 'Detail', params: { id: starship.url.split('starships/')[1].slice(0, -1) }}">
        <li>
            <div>
                <p>Name : {{ starship.name }}</p>
            </div>
        </li>
    </router-link>
</template>

<script>
    export default {
        name: 'StarshipItem',
        props: { starship: Object }
    }
</script>

<style lang="scss" scoped>
    li {
        border: 1px solid yellow;
    }
</style>