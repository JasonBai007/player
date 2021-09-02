<template>
  <div class="player-wrap">
    <img src="../assets/logo.png" />
    <h1>Hi</h1>
    <el-button @click="play">adff</el-button>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
onMounted(() => {
  getList();
});
const play = () => {
  console.log("play");
};
const getList = () => {
  fetch("/nerves/list.json")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
    });
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
