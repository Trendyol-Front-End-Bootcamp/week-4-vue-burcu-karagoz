<template>
    <ul class="starship-list">
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
    .starship-list {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 30px;
        padding: 30px 60px;
    }
</style>