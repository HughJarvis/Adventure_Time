<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>




.characters-background {
  width: 640px;
  height: 495px;
  border: 2px solid black;
  margin: 0px;

}

.places-background {
  width: 640px;
  height: 495px;
  /* border: 2px solid black; */
  margin: 0px;

}

img {
  max-width: 100%;
    height: auto;
}

.logo {
  position: absolute;
  top: 10px;
  left: 10px;

}

.list-container {
  position:absolute;
  top: 180px;
  left: 30px;
  width: 170px;
  height: 290px;
  background-color: white;
  border: 0.5px solid black;
  box-shadow: 2px 2px 2px 1px black;
  transform: rotate(-2deg);
}

.places-list-container {
  position:absolute;
  top: 200px;
  left: 40px;
  width: 170px;
  height: 240px;
  background-color: white;
  border: 0.5px solid black;
  box-shadow: 2px 2px 2px 1px black;
  transform: rotate(-2deg);
}


.list {
  width: 170px;
  height: 240px;
  overflow-y: scroll;
}

.places-list {
  height: 240px;
}

li {
  font-family: arial;
  font-size: 15px;
  list-style: none;
  margin-left: 5px;
  margin-top: 3px;
  margin-bottom: 3px;
  margin-right: 3px;
  padding-left: 3px;
  padding-top: 3px;
  padding-bottom: 3px;
  background-color: turquoise;
}

li:hover {
  background-color: limegreen;
}


</style>
