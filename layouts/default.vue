<script setup lang="ts">
//LAYOUT IS FOR HTML THAT HAS TO BE PRESENT IN EVERY PAGE
//ALL THE COMMON PARTS OF THE WEBSITE ARE HERE!
</script>

<template>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway">

  <header>
    <NuxtLink to="/">
    <h1><img src="~/assets/img/logo.png" width="75%"></h1>
  </NuxtLink>
    <nav>
      <button class="btn" onclick="history.back()"><img src="~/assets/img/backarrow.svg"></button>
      <NuxtLink to="/about_us">ABOUT US</NuxtLink>
      <NuxtLink to="/people">ALL PEOPLE</NuxtLink>
      <NuxtLink to="/activities">ALL ACTIVITIES</NuxtLink>
      <NuxtLink to="/contact_us">CONTACT US</NuxtLink>
    </nav>
  </header>



  <main>
    <slot/>
  </main>

  <footer>
    Made by Citrulli :)
  </footer>
</template>

<style scoped>
header, footer
{
  background-color: #0BC3A9;
}

footer
{
  flex-shrink: 0;
  text-align: center;
  margin-top: auto;
  border-top: 5px solid #006D77;
  padding: 10px;

  min-height: 1vh;
}

header
{
  padding: 0 20px 0 20px;
  margin-bottom: 0;
  border-bottom: 5px solid #006D77;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav {
  display: flex;
  gap: 70px;
}

nav a {
  font-size: 22pt;
  font-weight: bold;
}

.btn {
  background-image: linear-gradient(to bottom, white);
  border-radius: 28px;
  color: #ffffff;
  width: 80px;
}

.btn:hover {
  background: white;
  background-image: linear-gradient(to bottom, rgba(197, 177, 177, 0.826));
  text-decoration: none;
}

</style>