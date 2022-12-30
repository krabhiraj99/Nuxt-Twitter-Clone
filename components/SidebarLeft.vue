<template>
    
  <div class="sidebar-left">
        <twitter class="logo py-2 "/>
        <sidebar-left-item  detail="Home" icon="house-fill" />
        <sidebar-left-item  detail="Explore" icon="hash" />
        <sidebar-left-item  detail="Notifications" icon="bell" />
        <sidebar-left-item  detail="Messages" icon="envelope" />
        <sidebar-left-item  detail="Bookmarks" icon="bookmark" />
        <sidebar-left-item  detail="Lists" icon="card-checklist" />
        <sidebar-left-item  detail="More" icon="three-dots" />

    </div>
</template>

<script>
import Twitter from './Logo/Twitter.vue';
export default{
    components: { Twitter }
}
</script>

<style scoped>
.logo{
    margin-bottom: 30px;
    padding: 0 35px;
}
.sidebar-left{
    border-right: 1px solid lightgray;
    height: 100vh;
}   
</style>