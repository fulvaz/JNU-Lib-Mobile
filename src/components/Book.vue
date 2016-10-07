<template>
   <section class="book">
       <item :book="book"></item>
       <section>
           <p class="book-title">可借信息</p>
           <ul>
               <li v-for="info in borrowInfo" ><borrow-info :info="info"></borrow-info></li>
           </ul>
       </section>
   </section>
    <bar></bar>
</template>
<style lang="sass" scoped>
    .book {
        background-color: #e7e7e7;

        margin-bottom: 3rem;

        section {
            margin-top: 5px;
            padding: 1rem 30px;
            background-color: white;

            p {
                margin: 0;
                padding: 0 0;
                border-bottom: 1px solid #e7e7e7;
            }

            .book-title {
                padding-top: 0;
                padding-bottom: 1rem;
            }

            li {
                padding: 1rem 0;
                border-bottom: 1px solid #e7e7e7;
            }
        }

    }



</style>
<script>
    import Item from './ResultItem.vue'
    import BookStore from '../model/Book.js'
    import Borrow from './Borrow.vue'
    import Bar from './BookController.vue'
    import config from '../config/config'
    export default{
        data(){
            return{
                book: {},
                borrowInfo: {}
            }
        },
        route: {
            data: function(t) {


                // fetch borrow info
                // TODO refine this
                return Promise.all([
                    BookStore.getBook(),
                    this.$http.get(config.bookURL + '/' + this.$route.params.id)
                ]).then(([book, {body: borrowInfo}]) => ({book, borrowInfo}))

            }
        },
        components:{
            item: Item,
            'borrow-info': Borrow,
            bar: Bar
        }
    }
</script>
