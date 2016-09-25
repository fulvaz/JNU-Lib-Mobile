<template>
  <the-head></the-head>
  <router-view></router-view>
  <the-foot></the-foot>

</template>

<script>
  import theHead from './components/TheHead.vue'
  import theFoot from './components/TheFoot.vue'
  import Index from './components/Index.vue'


export default {
  components: {
    'the-head': theHead,
    'the-foot': theFoot,
    'index': Index
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello Vue!'
    }
  },

  head: {
    meta: [
      {name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1'}
    ]
  }
}

</script>

<style lang="sass">
body {
  margin: 0;
}

  a:link {

  }

  a:visited {

  }

  a:hover {

  }

  a:active {

  }
</style>
