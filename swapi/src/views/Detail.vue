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
import Loading from '@/components/TheLoading.vue';
import { fetchSingleStarshipData } from '../services/index';

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
    async fetchSingleStarshipData(id) {
      try {
        this.loading = true;

        const fetchSingleStarshipDataWithId = await fetchSingleStarshipData(id);
        this.starship = fetchSingleStarshipDataWithId;

        this.loading = false;

      } catch(error) {
        console.log(error.name, error.message);
      }
    }
  },
  created() {
    this.fetchSingleStarshipData(this.$route.params.id)
  },
}
</script>
