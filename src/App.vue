<template>
  <Player />
</template>

<script>
import Player from "./views/player.vue";

export default {
  name: "App",
  components: {
    Player,
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  max-width: 1024px;
  margin: 0 auto;
}
</style>
