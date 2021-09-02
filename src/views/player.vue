<template>
  <div class="player-wrap">
    <h1>《精神焦虑症的自救》</h1>
    <h6>Claire Weekes</h6>
    <img src="../assets/hero.jpg" class="hero" />
    <template v-if="listData.length>0">
      <div class="list" v-for="(item,i) in listData" :key="i">
        <h5>{{item.title}}</h5>
        <audio :src="item.link" controls></audio>
      </div>
    </template>
    <footer>Developed by JasonBai</footer>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
let list = ref([]);

const listData = computed(() => {
  return list.value.map((name) => {
    return {
      title: name.slice(0,-4),
      link: `https://lubanseven.gitee.io/nerves/mp3/${name}`,
    };
  });
});

onMounted(() => {
  getList();
});

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
h1 {
  margin: 20px 0 5px;
  font-size: 24px;
}
h6 {
  margin: 15px 0;
}
.hero {
  display: block;
  margin: 10px auto;
}
footer {
  padding: 20px;
  font-size: 13px;
}
</style>
