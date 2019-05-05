<template lang="html">
<div class="data-list">
    <li v-if="character" v-on:click="handleCharacterClick">{{character.name}}</li>
    <li v-if="place" v-on:click="handlePlaceClick">{{place.name}}</li>
    <li v-if="ruler"><router-link :to="{ name: 'characters', params: {ruler} }">{{ruler.name}}</router-link></li>
    <li v-if="resident"><router-link :to="{ name: 'characters', params: {resident} }">{{resident.name}}</router-link></li>
</div>
</template>

<script>
import DataListItem from '@/components/DataListItem'

export default {
  name: 'data-list-item',
  components: { DataListItem },
  props: ['character', 'place', 'ruler', 'resident'],
  methods: {
    handleCharacterClick(){
      eventBus.$emit('character-selected', this.character)
    },
    handlePlaceClick(){
      eventBus.$emit('place-selected', this.place)
   }
  }
}
</script>

<style lang="css" scoped>


</style>
