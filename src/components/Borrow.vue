<template>
    <div class="info">
        <p class="info-location">{{info.location}}</p>
        <p class="info-status">{{info.status}}</p>
        <p class="info-index">{{info.index}}</p>
    </div>
</template>
<script>
    export default {
        props: {
            info: Object
        },
        components: {
        }
    }
</script>
<style lang="sass" scoped>
    p {
        margin: .5rem 0;
    }

    .info {
        display: flex;
        flex-wrap: wrap;
    }

    .info-location {
        flex: 1 1 60%;
    }

    .info-status {
        flex: 1 1 40%;
    }
</style>