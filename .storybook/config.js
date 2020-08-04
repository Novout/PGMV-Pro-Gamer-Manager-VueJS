import { configure } from '@storybook/vue'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const loadStories = () => {
  require('../src/book');
}

configure(loadStories, module);