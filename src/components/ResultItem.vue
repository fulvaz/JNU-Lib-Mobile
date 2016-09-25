<template>
<li>
    <div class="book-cover"><img :src="book.cover" alt=""></div>
    <div class="book-info">
        <a v-link="{path: './book/' + book.url}"><h3 class="book-title">{{book.name}}</h3></a>
        <p class="book-author">{{book.author}} - {{book.authorEN}}</p>
        <p class="book-publish">{{book.publisher}}, {{book.publishDate}} {{book.pages}} {{book.size}}</p>
    </div>
</li>
</template>
<style scoped lang="sass">
    li {
        padding: 15px 30px;
        margin-bottom: 5px;
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
    export default {
        props: {
            book: Object
        }
    }
</script>