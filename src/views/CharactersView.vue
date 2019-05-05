<template lang="html">
  <div v-if="characters" class="characters-background">
    <img src="@/assets/everybody.jpeg" alt="Adventure Time characters">

    <div class="logo">
      <img src="@/assets/adventure-time.png" alt="Adventure Time logo">
    </div>

    <div class="list-container">

      <div class="header">
        <Header text="Characters"/>
      </div>

      <div class="list">
        <DataList :characters="characters"/>
      </div>

    </div>

    <div class="details">
      <ItemDetails v-if="selectedCharacter" :character="selectedCharacter"/>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header';
import DataList from '@/components/DataList';
import ItemDetails from '@/components/ItemDetails';

export default {
  name: 'characters-view',
  components: {
    Header,
    DataList,
    ItemDetails
  },

  data(){
    return {
      characters: [],
      selectedCharacter: null

    }
  },

  mounted(){
    fetch('https://adventuretimeapi.herokuapp.com/people')
    .then(response => {
      return response.json();
    })
    .then((data) => {
      this.characters = data
    })

    eventBus.$on('character-selected', (character) => {
      this.selectedCharacter = character;
    })
  }
}
</script>

<style lang="css" scoped>
/* .wrapper {
  position:relative;

}

.list-container {
  position:absolute;
  top: 80px;
  width: 80px;
  height: 150px;
  background-color: white;
  border: solid 2px, black;
} */

</style>
