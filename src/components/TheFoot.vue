<template>
    <footer>
        <p><a href="#">about</a> | produce by fulvaz@2016</p>
    </footer>
</template>
<style lang="sass">
    footer {
        height: 8rem;


        display: flex;
        align-items: center;
        justify-content: center;

        background-color: black;
        color: white;
        text-transform: capitalize;
        font-size: 0.5em;
        font-family: PingFangSC-Thin, sans-serif;

        a {
            text-decoration: none;
        }

        /*lvha*/
        a:link {
            color: white;
        }

        a:visited {
            color: white;
        }

        a:active {
            color: white;
        }
    }
</style>
<script>
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
        }
    }
</script>
