<template>
  <div class="d-flex mainDiv">
    <div class="sidebar-left col-2 col-md-3">
      <SidebarLeft />
    </div>
    <div class="home-content col-sm-10 col-md-6">
        <Home />
    </div>
    <div class="sidebar-right col-md-3">
        <SidebarRight />
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  middleware: 'auth'
}
</script>

<style scoped>
.home-content{
  border: 1px solid lightgray;
}
.mainDiv{
  display: flex;
  flex: 1;
  max-width: 1000px;
  margin: auto;
}

.sidebar-right {
  display: none;
}
@media(min-width: 768px){
  .sidebar-right {
    display: block;
  }
  .home-content{
  margin-right: 15px;
  }
}


</style>

