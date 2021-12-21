<template>
<div class="adminPage">
    <ManagementHeader />
    <ManagementAside />
</div>
</template>

<script>
import ManagementAside from '../components/management/aside/aside.vue';

export default {
    name: 'adminPage',
    components: {
        ManagementAside
    }
}
</script>

<style lang="scss">

</style>
