<template>
    <div class="container" @click="select">
        <div class="book-cover"><img :src="book.cover" alt=""></div>
        <div class="book-info">
            <!--TOOD-->
            <a v-link="{path: '/book/' + book.id}"><h3 class="book-title">{{book.name}}</h3></a>
            <p class="book-author">{{book.author}} - {{book.authorEN}}</p>
            <p class="book-publish">{{book.publisher}}, {{book.publishDate}} {{book.pages}} {{book.size}}</p>
        </div>
    </div>

</template>
<style scoped lang="sass">
    .container {
        padding: 15px 30px;
        display: flex;

        background-color: white;
    }

    .book-cover {
        margin-right: 10px;
        flex: 1 1 50px;
    }

    .book-info {
        flex: 10 1 250px;
    }


</style>
<script>
    import BookStore from '../model/Book.js'
    export default {
        props: {
            book: Object
        },
        methods: {
          select() {
            BookStore.setBook(this.book).then((res) => {
            });
          }
        },

        route: {

        }
    }
</script>