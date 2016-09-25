<template>
    <div class="book-cover"><img :src="book.cover" alt=""></div>
    <div class="book-info">
        <h3 class="book-title">{{book.name}}</h3>
        <p class="book-author">{{book.author}} - {{book.authorEN}}</p>
        <p class="book-publish">{{book.publisher}}, {{book.publishDate}} {{book.pages}} {{book.size}}</p>
    </div>
</template>
<style>

</style>
<script>
    export default {
        props: {
            book: Object
        }
    }
</script>