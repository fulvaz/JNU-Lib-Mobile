<template>
    <section>
        <ul>
            <li v-for="book in books">
                <div class="book-cover"><img :src="book.cover" alt=""></div>
                <div class="book-info">
                    <h3 class="book-title">{{book.name}}</h3>
                    <p class="book-author">{{book.author}} - {{book.authorEN}}</p>
                    <p class="book-publish">{{book.publisher}}, {{book.publishDate}} {{book.pages}} {{book.size}}</p>
                </div>
            </li>
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
            data: function(transition) {
              return this.$http.get('http://localhost:8080/dist/static/JSON/result.json').then((res) => {
                  return {books: res.body}
              });
            }
        },
        components:{
        }
    }
</script>
