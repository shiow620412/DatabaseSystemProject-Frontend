<template>
<div class="adminPage">
    <el-text style="font-size: 50px;">Admin Page Test</el-text>
    <ManagementHeader />
    <ManagementAside />
    <router-view />
</div>
</template>

<script>
import ManagementHeader from '../components/management/header/header.vue';
import ManagementAside from '../components/management/aside/aside.vue';

export default {
    name: 'adminPage',
    components: {
        ManagementHeader,
        ManagementAside
    }
}
</script>

<style lang="scss">

</style>
