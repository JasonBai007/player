<template>
  <div class="player-wrap">
    <img src="../assets/logo.png" />
    <h1>《精神焦虑症的自救》</h1>
    <audio :src="src" controls></audio>
    <!-- <el-button @click="play">adff</el-button> -->
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
let list = ref([]);
const i = ref(0);
const src = computed(() => {
  console.log(list.value);
  return "https://lubanseven.gitee.io/nerves/mp3/" + list.value[i.value];
});

onMounted(() => {
  getList();
});
function play() {
  console.log("play");
}
function getList() {
  fetch("/nerves/list.json")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      list.value = data;
    });
}
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
