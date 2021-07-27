<template>
  <div class="detail-container">
    <div v-if="loading">
      <Loading />
    </div>
    <div v-else>
      <router-link to="/">geri</router-link>
      <p>{{starship.name}}</p>
      <p>{{starship.model}}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Loading from '@/components/TheLoading.vue';

export default {
  name: 'Detail',
  components: {
    Loading
  },
  data() {
    return {
      starship: null,
      loading: false
    }
  },
  methods: {
    fetchSingleStarshipData(id) {
      this.loading= true;

      axios
      .get(`https://swapi.dev/api/starships/${id}`)
      .then(response => {
        console.log(response.data)
        this.starship = response.data;
        this.loading= false;
      })
    }
  },
  created() {
    this.fetchSingleStarshipData(this.$route.params.id)
  },
}
</script>
