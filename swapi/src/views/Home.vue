<template>
  <div class="home">
    <SearchArea @search-starship='searchStarship' />

    <div v-if="loading">
      <Loading />
    </div>

    <div v-else>
      <StarshipList :starships='starships' />
      <Pagination v-if="pagination" :pagination='pagination' @get-page='getPage'/>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
// @ is an alias to /src
import SearchArea from '@/components/SearchArea.vue'
import StarshipList from '@/components/StarshipList.vue'
import Pagination from '@/components/Pagination.vue'
import Loading from '@/components/TheLoading.vue'

export default {
  name: 'Home',
  components: {
    SearchArea,
    StarshipList,
    Pagination,
    Loading
  },
  data() {
    return {
      starships: [],
      loading: false,
      pagination: null
    }
  },
  methods: {
    searchStarship(searchText) {
      this.loading= true;

      axios
      .get(`https://swapi.dev/api/starships/?search=${searchText}`)
      .then(response => {
        const { count, next, previous, results } = response.data;

        this.starships = results;
        this.pagination = { count, next, previous}
        this.loading= false;
      })
    },

    fetchStarshipData() {
      this.loading= true;

      axios
      .get('https://swapi.dev/api/starships/')
      .then(response => {
        const { count, next, previous, results } = response.data;

        this.starships = results;
        this.pagination = { count, next, previous}
        this.loading= false;
      })
    },

    getPage(url) {
      this.loading= true;

      axios
      .get(url)
      .then(response => {   
        const { count, next, previous, results } = response.data;

        this.starships = results;
        this.pagination = { count, next, previous}
        this.loading= false;
      })
    }
  },

  created() {
    this.fetchStarshipData()
  },
}
</script>
