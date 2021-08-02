<template>
  <div v-if="!starship" class="detail-wrapper">
    <router-link to="/" class="back-btn">BACK</router-link>
    <div class="info-container">
      <img src="../assets/img/starship.png" height="350" />
      <div class="starship-info" v-if="starship">
        <h1>{{ starship.name }}</h1>
        <p><span>Model</span>{{ starship.model }}</p>
        <p><span>Hyperdrive Rating</span>{{ starship.hyperdrive_rating }}</p>
        <p><span>Passengers</span>{{ starship.passengers }}</p>
        <p>
          <span>Max Atmosphering Speed</span
          >{{ starship.max_atmosphering_speed }}
        </p>
        <p><span>Manufacturer</span>{{ starship.manufacturer }}</p>
        <p><span>Crew</span>{{ starship.crew }}</p>
        <p><span>Cargo Capacity</span>{{ starship.cargo_capacity }}</p>
      </div>
    </div>
  </div>
  <div v-else>
    <Loading />
  </div>
</template>

<script>
import Loading from "@/components/TheLoading.vue";
import { fetchSingleStarshipData } from "../services/index";

export default {
  name: "Detail",
  components: {
    Loading,
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
  .info-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 60px auto;
    padding: 30px 80px;
    border: 1px solid #fce854;
    background-color: #000000;
    border-radius: 8px;

    .starship-info {
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      padding-left: 100px;

      h1 {
        color: #fce854;
        line-height: 32px;
      }

      p {
        text-align: left;
        line-height: 22px;
      }

      span {
        display: block;
        color: #778aa4;
        margin-right: 12px;
        min-width: 230px;
      }
    }
  }
}
</style>
