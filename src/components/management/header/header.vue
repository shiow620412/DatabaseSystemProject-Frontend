<template>
<div class="adminPage">
    <p>
        <el-text style="font-size: 50px;">Admin Page Test</el-text>
    </p>
</div>
<div>
    <router-link to="/management/member">
        <el-button>Member Management</el-button>
    </router-link>
</div>
</template>

<script>
export default {
    name: 'adminPage',
    components: {}
}
</script>

<style lang="scss">

</style>
