<template>
  <div>
    <Navbar />
    <router-view/>
  </div>
</template>

<script>
  import Navbar from '@/components/TheNavbar.vue'

  export default {
    components: { Navbar }
  }
</script>

<style lang="scss">
@font-face {
  font-family: "StarWars";
  src: local("StarWars"), url(assets/fonts/STARWARS.otf) format("truetype");
}

* {
  font-family: "StarWars";
}

body {
  background: #000000 url("./assets/img/background-img.jpeg");
    // background: #000000 url("https://fwbmatch.fra1.digitaloceanspaces.com/starwars/star-wars-bg-01.jpg");
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
}

ul {
  padding: 0;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
  color: white;
}

h3 {
  margin: 0;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
