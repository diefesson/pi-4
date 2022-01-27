<template>
  <header>
    <button class="buttonForm" type="submit">{{ label }}</button>
  </header>
</template>

<style>
.buttonForm {
  all: unset;
  border-radius: 5px;
  min-width: 120px;
  text-align: center;
  padding: 15px 30px 15px 30px;
  background: #fff;
}

.buttonForm:hover {
  cursor: pointer;
  background: #f5f5f5;
}
</style>

<script>
export default {
  name: "Button",
  props: {
    label: String,
  },
};
</script>
