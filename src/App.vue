<template>
  <the-head></the-head>
  <router-view></router-view>

</template>

<script>
  import theHead from './components/TheHead.vue'
  import Index from './components/Index.vue'


export default {
  components: {
    'the-head': theHead,
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
    color: black;
    text-decoration: none;
  }

  a:visited {
    color: black;
  }

  a:hover {
    color: black;
  }

  a:active {
    color: black;
  }
   li {
     list-style: none;
   }

    ul {
      padding: 0;
      margin: 0;
    }
</style>
