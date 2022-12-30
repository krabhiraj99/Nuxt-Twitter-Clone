<template>
    <div class="sidebar-bottom-item">
        <div class="sidebar-bottom-item-left">
            <b-avatar src="https://placekitten.com/300/300"></b-avatar>
            <div class="item-info">
                <span class="name">{{ name }}</span>
                <span class="username">@{{ username }}</span>
            </div>
        </div>
        <div class="sidebar-bottom-item-right">
            <b-button pill size="sm" variant="dark ">Follow</b-button>
        </div>
    </div>
</template>

<script>
export default{
    props:{
        name: String,
        username: String,
    }
}

</script>

<style scoped>
.sidebar-bottom-item{
    display: flex;
    align-items: center;
    border-bottom: 1px solid lightgray;
    padding: 5px 0;
    justify-content: space-between;
}
.sidebar-bottom-item-left{
    display: flex;
    align-items: center;
}
.item-info{
    display: flex;
    flex-direction: column;
    margin:0 10px;
}
.name{
    font-weight: 500;
    margin: 0;
    cursor: pointer;

}
.username{
    font-size: 11px;
    margin: 0;
    cursor: pointer;

}
</style>