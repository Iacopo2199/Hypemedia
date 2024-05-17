<script>
export default {
  computed: {
    crumbs() {
      const fullPath = this.$route.fullPath;
      const params = fullPath.startsWith('/') ? fullPath.substring(1).split('/') : fullPath.split('/');
      const crumbs = [];
      let path = '/';
      params.forEach(param => {
        if (param !== '') {
          path = `${path}${param}/`;
          crumbs.push({ title: this.titleCase(param.replace(/-/g, ' ')), path });
        }
      });
      return crumbs;
    },
  },
  methods: {  //Method to create the title to be displayed
    titleCase(str) {
      str = str.replace("_", " ")
      str = str.replace("#", " >> ")
      return str.toLowerCase().replace(/(?:^|\s|-)\w/g, function(match) {
        return match.toUpperCase();
      });
    },
  },
};
</script>

<template>
  <ul class="crumb1">
    <li v-for="(crumb, index) in crumbs" :key="index">
      <NuxtLink :to="crumb.path">
        <span>{{ crumb.title }}</span>
      </NuxtLink>
    </li>
  </ul>
</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

*
{
  font-family: poppins;
  text-decoration: none;
  user-select: none;
}
a
{
  color: #fff;
}

.crumb1 li
{
  display: inline-block;
  padding: 30px;
  background: orange;
  transform: skew(-20deg);
  cursor: pointer;
  opacity: 0.8;
}

.crumb1 li:hover
{
  opacity: 1;
}

.crumb1 li a
{
  display: block;
  transform: skew(20deg);
}

.crumb2 li
{
  display: inline-block;
  padding: 15px;
  background: orange;
  cursor: pointer;
  opacity: 0.8;
}

.crumb2 li:hover
{
  opacity: 1;
}
  
.crumb3 li
{
  display: inline-block;
  padding: 15px;
  background: #4CAF50;
  cursor: pointer;
  box-shadow: 0 9px #999;
  border-radius: 7px;
}

.crumb3 li:active
{
  box-shadow: 0 5px #666;
  transform: translateY(4px);
  background: #3e8e41;
}

.crumb3 li:hover
{
    background: #3e8e41;
}
</style>