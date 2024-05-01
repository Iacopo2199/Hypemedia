<script setup lang="ts">
import { useCenterStore } from '~/stores/center';
import CenterComponent from './components/CenterComponent.vue';

const store = useCenterStore()
const center = store.center

</script>

  
<template>

<CenterComponent v-for="c of center"
                   :center_name="c.center_name">
</CenterComponent>
    


</template>

<style scoped>


main {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}



</style>