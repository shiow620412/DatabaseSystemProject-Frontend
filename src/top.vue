<template>
    <div class="top">
        <img class="photo-position" src="https://www.seekpng.com/png/detail/125-1256728_shop-domain-logo-shop-domain-logo.png" alt="">
        <a class="first-connect-position" href="https://github.com/Wang-YuQuan" target="_blank" rel="noopener">購物車</a>
        <a class="second-connect-position" href="https://github.com/Wang-YuQuan" target="_blank" rel="noopener">購物紀錄</a>
        <a class="third-connect-position" href="https://github.com/Wang-YuQuan" target="_blank" rel="noopener">會員中心</a>
    </div>
</template>

<script>
    export default {
        name: 'Top',
        components: {
            
        }
    }
</script>

<style>
    .top{
        height: 100px;
        background: -webkit-linear-gradient(yellow,red);
    }
    .first-connect-position{
        position: relative;
        left: 460px;
        top: -7px;
    }
    .second-connect-position{
        position: relative;
        left: 480px;
        top: -7px;
    }
    .third-connect-position{
        position: relative;
        left: 500px;
        top: -7px;
    }
    .photo-position{
        position: relative;
        right: 400px;
        width: 100px;
        top: 5px;
    }
</style>