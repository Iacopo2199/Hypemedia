<script setup lang="ts">
defineProps(['center_name'])
</script>

<template>
  
    <h1 class="w3-container w3-center w3-padding-32">Welcome to our center {{ center_name }}</h1>
    <img src="~/assets/img/logo.png" class="center">


</template>

<style scoped>

body,h1,h2,h3,h4,h5 {font-family: "Raleway", sans-serif}

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 20%;
}

</style>