<template>
    <section>
        <ul>
            <item v-for="book in books" :book="book"></item>
        </ul>
    </section>
</template>
<style>
    section {
        min-height: calc(100vh - 3em);

    }
</style>
<script>
    import Result from '../model/Result.js'
    import ResultItem from './ResultItem.vue'
    export default{
        data(){
            return{
                books: []
            }
        },
        route: {
            // 我来尝尝语法糖
            data: function(transition) {
              return this.$http.get('http://localhost:8080/dist/static/JSON/result.json').then((res) => {
                  return {books: res.body}
              });
            }
        },
        components:{
            item: ResultItem
        }
    }
</script>
