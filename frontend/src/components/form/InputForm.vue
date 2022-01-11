<template>
  <header>
    <div class="inputLabel">
      <p>{{ label }}</p>
      <input type="text" class="inputForm" />
    </div>
  </header>
</template>

<style>
.inputLabel {
  display: flex;
  width: 100%;
  gap: 10px;
  align-items: center;
}
.inputLabel > p {
  width: 80px;
  flex-wrap: wrap;
}

.inputForm {
  all: unset;
  background: #fff;
  width: 400px;
  height: 21px;
  border-radius: 10px;
  font-size: 15px;
  padding: 10px;
}

</style>

<script>
export default {
  name: "InputForm",
  props: {
    label: String,
  },
};
</script>
