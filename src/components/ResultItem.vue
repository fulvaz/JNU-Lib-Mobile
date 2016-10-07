<template>
    <div class="container" @click="select">
        <div class="book-cover"><img :src="book.cover" alt=""></div>
        <div class="book-info">

            <a v-link="{path: '/book/' + book.urlBase64}"><h3 class="book-title">{{book.name}}</h3></a>
            <p v-html="book.bookDetail"></p>
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