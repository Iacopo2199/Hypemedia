<script setup lang="ts">
//LAYOUT IS FOR HTML THAT HAS TO BE PRESENT IN EVERY PAGE
//ALL THE COMMON PARTS OF THE WEBSITE ARE HERE!
</script>

<template>
  <header>
    <h1><img src="~/assets/img/logo.png" width="60%"></h1>
    <nav>
      <NuxtLink to="/">HOME</NuxtLink>
      <NuxtLink to="/projects">ALL PROJECTS</NuxtLink>
      <NuxtLink to="/people">ALL PEOPLE</NuxtLink>
      <NuxtLink to="/services">ALL SERVICES</NuxtLink>
      <NuxtLink to="/activities">ALL ACTIVITIES</NuxtLink>
    </nav>
  </header>

  <main>
    <slot/>
  </main>

  <footer>
    Sweedish insegnaci qualcosa :)
  </footer>
</template>

<style scoped>
header, footer
{
  background-color: orange;
}

footer
{
  flex-shrink: 0;
  text-align: center;
  margin-top: auto;
  border-top: 5px solid brown;
  padding: 10px;

  min-height: 1vh;
}

header
{
  padding: 0 20px 0 20px;
  margin-bottom: 0;
  border-bottom: 5px solid brown;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav {
  display: flex;
  gap: 30px;
}

nav a {
  font-size: 17pt;
  font-weight: bold;
}
</style>