<template>
    <section class="controller">
        <button class="controller-request">预约</button>
        <button class="controller-detail">图书馆详情页</button>
    </section>
</template>
<script>
    export default {

    }
</script>
<style lang="sass" scoped>
    .controller {
        display: flex;
        align-items: center;
        position: fixed;
        bottom: 0px;

        box-sizing: border-box;
        width: 100vw;
        height: 3rem;

        background-color: black;
    }



    button {
        flex: 1 1;
        height: 90%;
        border: none;
        color: white;
        background-color: transparent;
    }

    button:first-child {
        border-right: 1px solid white;
    }
</style>