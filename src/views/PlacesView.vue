<template lang="html">
  <div v-if="places" class="places-background">
    <img src="@/assets/tree_house.jpeg" alt="Finn and Jake's Tree House">

    <div class="logo">
      <img src="@/assets/adventure-time.png" alt="Adventure Time logo">
    </div>


    <div class="places-list-container">

      <div class="header">
        <Header text="Places"/>
      </div>

      <div class="places-list">
        <DataList :places="places"/>
      </div>

    </div>

    <div class="details">
      <ItemDetails v-if="selectedPlace" :place="selectedPlace"/>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header';
import DataList from '@/components/DataList';
import ItemDetails from '@/components/ItemDetails';

export default {
  name: 'places-view',
  components: {
    Header,
    DataList,
    ItemDetails
  },

  data(){
    return {
      places: [],
      selectedPlace: null
    }
  },
  mounted(){
    fetch('https://adventuretimeapi.herokuapp.com/places')
    .then(response => {
      return response.json();
    })
    .then((data) => {
      this.places = data
    })

    eventBus.$on('place-selected', (place) => {
      this.selectedPlace = place;
    })
  }

}
</script>

<style lang="css" scoped>
</style>
