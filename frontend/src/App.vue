<template>
  <div class="page">
    <div class="page-content">
      <top/>
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
@import "@/style/colors.scss";
@import "@/style/fonts.scss";

body {
  margin: 0px;
}

.page {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.page-content {
  width: 100%;
  max-width: 600px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #003263;
  color: #fff;
  button {
    color: black;
  };
}
</style>

<script>
import Top from "@/components/Top.vue";

export default {
  components: {
    Top,
  },
};
</script>
