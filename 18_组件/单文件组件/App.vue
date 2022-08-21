<template>
    <div>
        <Yys></Yys>
        <Fgo></Fgo>
    </div>
</template>

<script>
import Yys from './vue/Yys.vue';
import Fgo from './vue/Fgo.vue';
export default {
    name:"App",
    components: {
        Yys,
        Fgo
    }
}
</script>