/* jshint esversion: 6 */

const { environment } = require('@rails/webpacker')
const vue = require('./loaders/vue')

environment.loaders.append('vue', vue)
module.exports = environment
