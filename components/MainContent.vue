<template>
    <div class="main-content">
        <h5 class="main-title">Home</h5>
        {{ data }}
    </div>
</template>

<script>
export default{
    props: {
        data: String,
    }
}
</script>

<style scoped>
.main-title{
    padding: 4px 7px;
    font-weight: 700;
    cursor: pointer;
}
.main-content{
    border-bottom: 1px lightgray solid;
}
</style>