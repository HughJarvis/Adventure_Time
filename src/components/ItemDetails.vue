<template lang="html">
<div class="">

<!-- displays for a character -->
  <div v-if="character">
    <h2>{{character.name}}</h2>
    <p>Full name: {{character.fullname}}</p>
    <p>Type: {{character.type}}</p>
  </div>

<!-- displays for a place -->
  <div v-if="place">
    <h2>{{place.name}}</h2>
    <p>Type: {{place.type}}</p>
    <p>Rulers:</p>
    <DataList v-if="place.rulers" :rulers="rulers"/>
    <p>Residents:</p>
    <DataList v-if="place.residents" :residents="residents"/>
  </div>
</div>
</template>

<script>
import DataList from '@/components/DataList'

export default {
  name: 'item-details',
  props: ['character', 'place', 'ruler', 'resident'],
  components: {
    DataList
  },

  data(){
    return {
      places: null,
      residents: null,
      rulers: null,
      characters: null //characters will need to come from params in route
    }
  }
  //TODO write method to convert the array of urls in item.residents and item.rulers
  //to an array of characters - possibly a computed method

  //1. map rulers urls with .slice method to return array of last 4 letters in string
  //which is array of character ids.

  //2. find/filter a character for each id in the ids array to return shorter character array
  // Try .map with the filter as an argument


}
</script>

<style lang="css" scoped>
</style>
