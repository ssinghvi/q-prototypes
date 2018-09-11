/* eslint no-console: 0 */
/* eslint-disable no-new */
/* jshint esversion: 6 */

import Vue from 'vue/dist/vue.esm'
import App from '../app.vue'

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#hello',
    data: {
      message: 'Can you say hello?'
    },
    components: { App }
  })
})
