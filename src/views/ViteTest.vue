<template>
  <span class="text-gray-300"> From json: {{ json.foo }}</span>
  <br />
  <el-button @click="openTxt">TXT</el-button>
</template>
<script setup lang="ts">
import json from "~/assets/test.json";
const openTxt = () => {
  window.open("/test.txt");
};
</script>

<style lang="scss" scoped></style>
