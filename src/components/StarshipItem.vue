<template>
  <router-link
    :to="{
      name: 'Detail',
      params: { id: starship.url.split('starships/')[1].slice(0, -1) },
    }"
  >
    <li class="starship-item">
      <div class="img-container">
        <img class="starship-img" src="../assets/img/starship-1.jpeg" />
        <img class="starship-img" src="../assets/img/starship-2.jpeg" />
      </div>

      <div class="starship-info">
        <h3 class="starship-name">{{ starship.name }}</h3>
        <p class="starship-model"><span>Model :</span>{{ starship.model }}</p>
        <p class="starship-rating">
          <span>Hyperdrive Rating :</span>{{ starship.hyperdrive_rating }}
        </p>
      </div>
    </li>
  </router-link>
</template>

<script>
export default {
  name: "StarshipItem",
  props: { starship: Object },
};
</script>

<style lang="scss" scoped>
.starship-item {
  border: 1px solid #fce854;
  border-radius: 8px;
  background-color: #030303;
  width: 100%;
  height: 100%;
  min-width: 255px;
  transition: transform 1s;

  .img-container {
    position: relative;
    width: 100%;
    height: 300px;

    .starship-img {
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      border-radius: 8px;

      &:last-child {
        opacity: 1;
        transition: opacity 0.4s ease-in-out;
        -moz-transition: opacity 0.4s ease-in-out;
        -webkit-transition: opacity 0.4s ease-in-out;
      }
    }
  }

  .starship-info {
    padding: 10px 30px;

    h3 {
      color: #fce854;
      margin-bottom: 32px;
      text-align: center;
    }

    .starship-model,
    .starship-rating {
      display: flex;
      line-height: 22px;
      color: #fdfefc;
      text-align: left;
      font-size: 14px;

      span {
        margin-right: 8px;
        min-width: fit-content;
        color: #778aa4;
      }
    }
  }

  &:hover {
    box-shadow: 0px 0px 15px #778aa4;
    border: 1px solid #778aa4;
    transform: translate(0, -10px);

    .starship-img:last-child {
      opacity: 0;
    }
  }
}
</style>
