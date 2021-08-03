<template>
  <div class="home">
    <SearchArea @search-starship="searchStarshipText" />

    <div v-if="loading">
      <Loading />
    </div>

    <div v-else>
      <div v-if="this.starships.length == 0">
        <NoResult />
      </div>
      <div v-else>
        <StarshipList :starships="starships" />
        <Pagination
          v-if="pagination"
          :pagination="pagination"
          @get-page="getPageData"
        />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SearchArea from "@/components/SearchArea.vue";
import StarshipList from "@/components/StarshipList.vue";
import Pagination from "@/components/Pagination.vue";
import Loading from "@/components/TheLoading.vue";
import NoResult from "@/components/NoResult.vue";

import { searchStarship, fetchStarshipData, getPage } from "../services/index";

export default {
  name: "Home",
  components: {
    SearchArea,
    StarshipList,
    Pagination,
    Loading,
    NoResult,
  },

  data() {
    return {
      starships: [],
      loading: false,
      pagination: null,
    };
  },

  methods: {
    async setData(dataFunction, ...arg) {
      try {
        this.loading = true;

        const starShipData = await dataFunction(arg);

        const { count, next, previous, results } = starShipData;

        this.starships = results;
        this.pagination = { count, next, previous };

        this.loading = false;
      } catch (error) {
        throw new Error(error.message);
      }
    },
    fetchStarshipData() {
      this.setData(fetchStarshipData);
    },
    searchStarshipText(searchText) {
      this.setData(searchStarship, searchText);
    },
    getPageData(url) {
      this.setData(getPage, url);
    },
  },

  created() {
    this.fetchStarshipData();
  },
};
</script>
