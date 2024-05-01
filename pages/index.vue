<script setup lang="ts">
import { useCenterStore } from '~/stores/center';
import CenterComponent from '~/components/CenterComponent.vue';
import NavBarComponent from '~/components/NavBarComponent.vue';

const store = useCenterStore()
const center = store.center

</script>

<template>
<link rel="stylesheet" href="~/assets/css/general.css"></link>


<CenterComponent v-for="c of center"
                   :center_name="c.center_name"
                   :history="c.history"
                   :mission="c.mission"
                   :location="c.location"
                   :opening_hours="c.opening_hours"
                   :practical_info="c.practical_info">
</CenterComponent>
    


</template>

<style scoped>

</style>