<template>
    <div class="d-flex align-items-center mx-3 py-2 my-2 sidebarItem">
        <b-icon class="mx-2 icon" :icon="icon" aria-hidden="true"></b-icon>
        <p class="my-auto detail">{{ detail }}</p>
    </div>
</template>

<script >
export default{
    props: {
        icon: String,
        detail: String,
    }
}
</script>

<style scoped>
.detail{
    font-weight: 500;
    display: none;
}

@media(min-width: 768px){
    .detail{
        display: block;
    }
}


.icon{
    width: fit-content !important;
}
.sidebarItem{
    cursor: pointer;
    width: fit-content;
    border-radius: 20px;
    transition: all 250ms;
    padding-left: 18px;
    padding-right: 30px;
}
@media(max-width: 768px){
    .sidebarItem{
        padding: 10px;
        width: 50px;
        height: 50px;
        border-radius: 100%;

    }
}
.sidebarItem:hover{
    background-color: rgb(240, 240, 240);
}
</style>