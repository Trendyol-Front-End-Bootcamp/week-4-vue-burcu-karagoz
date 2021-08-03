<template>
  <div v-if="starship" class="detail-wrapper">
    <router-link to="/" class="back-btn">BACK</router-link>
    <StarshipDetailCard :starship="starship" />
  </div>
  <div v-else>
    <Loading />
  </div>
</template>

<script>
import Loading from "@/components/TheLoading.vue";
import StarshipDetailCard from "@/components/StarshipDetailCard.vue";
import { fetchSingleStarshipData } from "../services/index";

export default {
  name: "Detail",
  components: {
    Loading,
    StarshipDetailCard,
  },

  data() {
    return {
      starship: null,
      loading: false,
    };
  },

  methods: {
    async fetchSingleStarshipData(id) {
      try {
        this.loading = true;

        const fetchSingleStarshipDataWithId = await fetchSingleStarshipData(id);
        this.starship = fetchSingleStarshipDataWithId;

        this.loading = false;
      } catch (error) {
        console.log(error.name, error.message);
      }
    },
  },

  created() {
    this.fetchSingleStarshipData(this.$route.params.id);
  },
};
</script>

<style lang="scss" scoped>
.detail-wrapper {
  position: relative;
  margin: 0 60px;
  padding-top: 30px;

  .back-btn {
    position: absolute;
    left: 0;
    top: 0;
    background-color: #000000;
    border: 1px solid #fce854;
    color: #fce854;
    padding: 15px 32px;
    margin: 4px 2px;
    border-radius: 8px;
  }
}
</style>
