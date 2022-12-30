<template>
    <div class="sidebar-right">
       <div class="input-container inner-addon left-addon"> 
            <b-icon scale="0.9" class="search-icon" icon="search" aria-hidden="true"></b-icon>
            <input class="input-tag" type="text" placeholder="Search Twitter" />
       </div>
       <SidebarRightCard title="What's happening" currentComponent="SidebarRightCardTop" />
       <SidebarRightCard title="Who to follow" currentComponent="SidebarRightCardBottom"  />
    </div>
</template>

<script>

</script>

<style scoped>
.sidebar-right{
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-right: 15px;
}
.input-container{
    display: flex;
    flex: 1;
    margin-top: 5px;
    

}
.input-tag{
    display: flex;
    flex: 1;
    border: none;
    outline: none;
    background-color: rgb(231, 230, 230);
    padding: 8px 15px;
    border-radius:25px;
    font-size: 13px;
    padding-left: 30px;
}
.inner-addon {
    position: relative;
}
.inner-addon .search-icon{
    position: absolute;
    padding: 10px;
    color: gray;
    

}
</style>