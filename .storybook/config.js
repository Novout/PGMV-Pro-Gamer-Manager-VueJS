import { configure } from '@storybook/vue'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import Button from '../src/stories/Button.vue'

Vue.component('my-button', Button);

const loadStories = () => {
  require('../src/stories');
}

configure(loadStories, module);