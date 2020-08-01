import { configure } from '@storybook/vue'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const loadStories = () => {
  require('../src/stories');
}

configure(loadStories, module);