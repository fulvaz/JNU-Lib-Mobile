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
    export default{
        data(){
            return{
                books: []
            }
        },
        route: {
            // 我来尝尝语法糖
            data: function(transition) {
                // TODO 需要重构一下
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
