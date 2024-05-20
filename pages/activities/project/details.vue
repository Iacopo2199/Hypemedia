<script setup lang="ts">
import { useDetailsStore } from '~/stores/details';
const store = useDetailsStore()
const details = store.details
</script>


<template>
    <div>
      <h1>Details</h1>
      <h4></h4>
    </div>

    <ul>
      <li v-for="d in details">
      {{ d.project_name }} , {{ d.target_people}}
      </li>
    </ul>

</template>

<style scoped>


</style>