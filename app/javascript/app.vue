<template>
  <div id="app" ref="container">
    <p>{{ message }}</p>
    <button @click="onClick">Click to insert</button>
    <hr/>
  </div>
</template>

<script>
import Vue from 'vue/dist/vue.esm';
import PageHeader from './components/page-header';

export default {
  data: function () {
    return {
      message: "Hello Vue!",
      comp: 'page-header'
    }
  },
  components: {
    'page-header': PageHeader
  },
  methods: {
      onClick() {
        var ComponentClass = Vue.extend(PageHeader)
        var instance = new ComponentClass({
            propsData: { type: 'primary' }
        })
        instance.$mount()
        console.log(this.$refs.container)
        this.$refs.container.appendChild(instance.$el)
      }
    }

}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
