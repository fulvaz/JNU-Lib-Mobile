<template>
    <header class="header">
        <a v-link="{path: '/'}"><h1 class="header-logo">jnulib</h1></a>
        <nav class="header-nav">
            <!--以后这里要处理登录-->
            <ul class="clearfix">
                <li>首页</li>
                <li>登录</li>
            </ul>
        </nav>
    </header>
</template>

<style lang="sass">
    @import "../style/util.scss";
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        box-sizing: border-box;
        padding: 1rem;

        height: 3em;

        background-color: black;
        color: white;

        .header-logo {
            color: white;
            text-transform: uppercase;
            font-family: PingFangSC-Semibold, sans-serif;
        }

        li {
            float: left;
            padding: 5px;

            list-style: none;
            color:white;

            font-family: PingFangSC-Thin, sans-serif;
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
