<template>
    <section>
        <ul>
            <li v-for="book in books"><item :book="book"></item></li>
        </ul>
    </section>
</template>
<style scoped>
    section {
        background-color: #e7e7e7;
        min-height: calc(100vh - 3em);

    }

    li {
        display: block;
        margin-bottom: 5px;
    }
    ul {
        margin: 0;
        padding: 0;
    }
</style>
<script>
    import ResultItem from './ResultItem.vue'
    import config from '../config/config'
    export default{
        data(){
            return{
                books: []
            }
        },
        route: {
            // 我来尝尝语法糖
            data: function(transition) {

              return this.$http.get(config.searchURL + '/' + this.$route.params.query).then((res) => {
                  res.body.forEach((e) => {
                    e.urlBase64 = btoa(e.url);
                    return e;
                  });
                  return {books: res.body}
              });
            }

        },
        components:{
            item: ResultItem
        }
    }
</script>
