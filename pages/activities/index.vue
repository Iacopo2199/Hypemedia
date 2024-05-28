<script setup>

useHead({
    title: 'Activity page',
    meta: [
      {
        name: 'activity page',
        content: 'This is the activity page of the website and here you see all the projects or services available' 
      },
    ],
  });

</script>


<template>
  <div id="app">
    <Tabs />
  </div>
</template>

<script>
  import Tabs from '../components/Tabs.vue'

  export default {
    name: 'App',
    components: {
      Tabs
    }
  }
</script>