<template>
<div class="adminPage">
    <ManagementHeader />
    <ManagementAside />
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
