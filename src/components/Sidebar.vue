<template>
  <div class="sidebar">
    <h1>Подкаст вопросы</h1>
    <span class="author">by Crimer</span>
  </div>
</template>

<script>
export default {
  name: "Sidebar"
};
</script>

<style lang="scss" scoped>
.sidebar {
  color: white;
  padding: 30px;
  flex: 0 1 20%;
  height: 100vh;
  background-color: #2196F3;
  // position: fixed;
  h1{
    font-size: 34px;
    font-weight: 400;
    margin: 0px 0px 20px 0;
  }
  span{
    font-size: 20px;
  }
}
</style>
