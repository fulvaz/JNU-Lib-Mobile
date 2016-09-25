<template>
    <div class="main">
        <div id="test"></div>
       <section>
           <h2>学而时习之 不亦说乎 </h2>
           <div class="search-container">
               <form action="">
                   <input type="text" class="search" v-model="query" v-on:keyup.enter="search">
               </form>
               <a href="#"><i class="fa fa-search" aria-hidden="true"></i></a>
           </div>
       </section>
    </div>
</template>
<style lang="sass">

    .main {
        display: flex;
        justify-content: center;
        align-items: center;

        height: calc(100vh - 8em - 3em);
        width: 100vw;
        background: #fff4c2 url(/dist/static/img/main-background.png);
        background-position: center;
        background-size: cover;

        section {
            position: relative;

            text-align: center;

            h2 {
                font-size: 1.5em;
                font-family: PingFangSC-Light, sans-serif;
                font-weight: normal;
            }

            .search-container {
                margin-top: 1.5em;
                position: relative;
            }

            input {

                width: 100%;
                height: 2rem;
                box-sizing: border-box;

                border-radius: 5px;
                border: 1px solid #cccccc;

                text-indent: 1.5rem;
            }
            
            i {
                position: absolute;
                top: 0.5rem;
                left: 0.5rem;

                font-size: 1rem;
            }

        }
    }
</style >

<script>
    import router from '../router.js'
    export default{
        data(){
            return{
                query: ''
            }
        },
        components:{
        },
        methods: {
            search: function() {
                this.$router.go('/result/' + this.query)
            }
        }
    }
</script>
