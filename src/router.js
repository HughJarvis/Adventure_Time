import Vue from 'vue';
import Router from 'vue-router';
import CharactersView from '@/views/CharactersView';
import PlacesView from '@/views/PlacesView';

Vue.use(Router)

export const router = new Router({
  routes: [
    {
      path: '/',
      name: 'characters',
      component: CharactersView,
      props: true
    },
    {
      path: '/places',
      name: 'places',
      component: PlacesView,
      props: true
    }
  ]
});
