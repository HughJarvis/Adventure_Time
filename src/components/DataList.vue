<template lang="html">
  <div class="data-list">
    <DataListItem v-if="characters" v-for="character in characters" :character="character"/>
    <DataListItem v-if="places" v-for="place in places" :place="place"/>
    <DataListItem v-if="rulers" v-for="ruler in rulers" :ruler="ruler"/>
    <DataListItem v-if="residents" v-for="resident in residents" :resident="resident"/>
  </div>
</template>

<script>
import DataListItem from '@/components/DataListItem'

export default {
  name: 'data-list-item',
  components: { DataListItem },
  props: ['characters', 'places', 'rulers', 'residents']

}
</script>

<style lang="css" scoped>
</style>
