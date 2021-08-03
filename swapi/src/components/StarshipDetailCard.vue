<template>
  <div v-if="starship" class="info-container">
    <div class="img-container">
      <img src="../assets/img/starship.png" height="350" />
    </div>
    <div class="starship-info">
      <h1>{{ starship.name }}</h1>
      <p><span>Model</span>{{ starship.model }}</p>
      <p><span>Hyperdrive Rating</span>{{ starship.hyperdrive_rating }}</p>
      <p><span>Passengers</span>{{ starship.passengers }}</p>
      <p>
        <span>Max Atmosphering Speed</span>{{ starship.max_atmosphering_speed }}
      </p>
      <p><span>Manufacturer</span>{{ starship.manufacturer }}</p>
      <p><span>Crew</span>{{ starship.crew }}</p>
      <p><span>Cargo Capacity</span>{{ starship.cargo_capacity }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "StarshipDetailCard",
  props: { starship: Object },
};
</script>

<style lang="scss" scoped>
.info-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 60px auto;
  padding: 30px 80px;
  border: 1px solid #fce854;
  background-color: #000000;
  border-radius: 8px;

  .img-container {
    flex: 1;

    img {
      width: 100%;
      height: 100%;
    }
  }

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
</style>
