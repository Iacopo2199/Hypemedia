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
    <h1><img src="~/assets/img/logo.png" width="60%"></h1>
  </NuxtLink>
    <nav>
      <button class="btn" onclick="history.back()">BACK</button>
      <NuxtLink to="/about_us">ABOUT US</NuxtLink>
      <NuxtLink to="/projects">ALL PROJECTS</NuxtLink>
      <NuxtLink to="/people">ALL PEOPLE</NuxtLink>
      <NuxtLink to="/services">ALL SERVICES</NuxtLink>
      <NuxtLink to="/activities">ALL ACTIVITIES</NuxtLink>
      <NuxtLink to="/contact_us">CONTACT US</NuxtLink>
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
  gap: 35px;
}

nav a {
  font-size: 17pt;
  font-weight: bold;
}

.btn {
  background: #d93434;
  background-image: -webkit-linear-gradient(top, #d93434, #330101);
  background-image: -moz-linear-gradient(top, #d93434, #330101);
  background-image: -ms-linear-gradient(top, #d93434, #330101);
  background-image: -o-linear-gradient(top, #d93434, #330101);
  background-image: linear-gradient(to bottom, #d93434, #330101);
  -webkit-border-radius: 28;
  -moz-border-radius: 28;
  border-radius: 28px;
  font-family: Arial;
  color: #ffffff;
  font-size: 20px;
  padding: 10px 20px 10px 20px;
  text-decoration: none;
}

.btn:hover {
  background: #ff0000;
  background-image: -webkit-linear-gradient(top, #ff0000, #ff007b);
  background-image: -moz-linear-gradient(top, #ff0000, #ff007b);
  background-image: -ms-linear-gradient(top, #ff0000, #ff007b);
  background-image: -o-linear-gradient(top, #ff0000, #ff007b);
  background-image: linear-gradient(to bottom, #ff0000, #ff007b);
  text-decoration: none;
}

</style>