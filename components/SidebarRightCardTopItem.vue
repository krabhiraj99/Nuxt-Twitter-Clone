<template>
    <div class="sidebar-top-item">
        <p class="title">{{ title }}</p>
        <p class="tweet-count" >{{ number }}k Tweets</p>
    </div>
</template>

<script>
export default{
    props:{
        title:String,
        number:String
    }
}
</script>

<style scoped>
.sidebar-top-item{
    border-bottom: 1px solid lightgray;
    margin: 5px 0;
}
.title{
    margin: 0;
    font-weight: 500;
    cursor: pointer;

}
.tweet-count{
    margin: 0;
    font-size: 11px;
    color: gray;
    margin-bottom: 5px;

}
</style>