<template>
  <div class="container">
    <div class="m-4">
      <div class="flex justify-between flex-row-reverse">
        <div class="border-solid border-2 border-sky-500 w-10 h-10">aaaa</div>
        <div class="border-solid border-2 border-red-500 w-10 h-10">bbb</div>
      </div>
      <el-card
        class="my-4 hover:bg-gray-400 hover:scale-105 duration-300"
        style="max-width: 480px"
      >
        <template #header>
          <div class="card-header">
            <span>Card name</span>
          </div>
        </template>
        <p v-for="o in 4" :key="o" class="text item">{{ "List item " + o }}</p>
        <template #footer>Footer content</template>
      </el-card>
      <el-button>default</el-button>

      <el-button
        class="w-[100px] h-[40px] bg-indigo-700 font-semibold text-white py-2 px-4 rounded-3xl hover:bg-indigo-500 hover:text-white duration-700"
        >Test</el-button
      >
      <el-button class="btn">configed</el-button>
      <el-button class="bg-red-300 btn">Custom</el-button>

      <button
        class="bg-indigo-700 font-semibold text-white py-2 px-4 rounded transform hover:scale-110 hover:bg-red-700 duration-1000"
      >
        Normal
      </button>
      <hr />
      <div class="qc-container hover:scale-105 duration-500"></div>
      <div
        class="svg-containt-2 w-1/2 h-64 border-solid border rounded-2xl m-2 bg-no-repeat p-2"
      ></div>

      <div
        class="svg-containt-3 w-1/2 h-64 border-solid border rounded-2xl m-2 bg-no-repeat p-2"
      ></div>

      <div class="flex justify-evenly flex-wrap p-5 border border-solid">
        <el-input
          class="w-[200px] h-[26px]"
          placeholder="Please input"
          v-model="input"
        ></el-input
        >{{ input }}
        <Arrowsvg></Arrowsvg>
      </div>

      <div class="flex justify-start">
        <div
          class="my-10 px-5 py-2 h-11 border border-solid flex justify-center items-center"
        >
          <span class="my-underline-text underline"
            >&nbsp;&nbsp; aaaa &nbsp;&nbsp;</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Arrowsvg from "@/assets/arrow.svg";
import { ref } from "vue";
const input = ref("");
</script>

<style lang="scss" scoped>
.my-underline-text {
  text-decoration-line: underline;
  text-decoration-thickness: 4px;
  text-underline-offset: 10px;
}
.container {
  padding: 20px;
  // background: linear-gradient(
  //   135deg,
  //   rgba(93, 201, 163, 1) 0%,
  //   rgba(50, 145, 129, 1) 100%
  // );
}
.qc-container {
  opacity: 1;
  border-radius: 22px;
  border-top: 1px solid rgba(255, 255, 255, 0.35);

  box-shadow: 0px 4px 12px rgba(63, 146, 122, 0.65);

  height: 100px;
  width: 300px;
  opacity: 1;
  border-radius: 22px;
  background-color: rgb(100, 182, 162);
  display: flex;
  justify-content: flex-end;
  padding: 20px;
  background-image: url("@/assets/img-2.bmp");
  background-repeat: no-repeat;
  background-position: 95%;
  background-size: auto 50%;
}
.svg-containt-2 {
  background-image: url("@/assets/img_3.svg"), url("@/assets/circal.svg");
  background-position: right, right;
}
.svg-containt-3 {
  background-image: url("@/assets/减去顶层.svg");
}
</style>
