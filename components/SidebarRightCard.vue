<template>
    <div class="sidebarRightCard">
        <p class="title">{{ title }}</p>
        <component v-bind:is="currentComponent"></component>
        <p class="show-more">Show More</p>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        currentComponent: String,
    }
}
</script>

<style scoped>
.sidebarRightCard{
    border: 1px lightgray solid;
    border-radius: 15px;
    padding: 10px;
    margin-top:10px;
    background-color: rgb(248, 248, 248);

}
.title{
    border-bottom: 1px solid lightgray;
    padding-bottom: 2px;
    font-weight: 600;
    margin-bottom: 2px;
}

.show-more{
    font-size: 12px;
    margin: 2px;
    color:  rgb(73, 173, 239);
    cursor: pointer;
    transition: ease-out 150ms;
}
.show-more:hover{
    color:  rgb(55, 110, 239);
    text-decoration: underline;

}
</style>