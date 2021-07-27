<template>
    <ul class="list-container">
        <StarshipItem 
            v-for="(starship, index) in starships" 
            :key="index" 
            class="list"
            :starship= "starship"
        />
    </ul>
</template>

<script>
    import StarshipItem from '@/components/StarshipItem.vue'

    export default {
        name: 'StarshipList',
        components: {
            StarshipItem
        },
        props: { starships: Array }
    }
</script>

<style lang="scss" scoped>

</style>