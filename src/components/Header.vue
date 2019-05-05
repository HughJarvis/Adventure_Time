<template>
  <div class="header">
    <h1>{{ text }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: ['text']
}
</script>


<style scoped>
Header {

  margin-left: 20px;
}

h1 {
  font-family: 'Gloria Hallelujah', cursive;
  font-size: 25px;
  margin-left: 20px;
  margin-top: 0px;
  margin-bottom: 0px;
  padding: 0;
}
</style>
