<template>
    <section>
        <ul>
            <li></li>
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
    export default{
        data(){
            return{
                books: []
            }
        },
        route: {
            // 我来尝尝语法糖
            data: function({to: {params: query}}) {
                var result = new Result();
                return result.fetch(query)
                    .then(function(data) {
                        data = JSON.parse(data);
                        this.books = data;
                    });
            }
        },
        components:{
        }
    }
</script>
