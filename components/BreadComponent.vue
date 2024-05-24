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


<style>
@import url('assets/css/breadcomp.css');
</style>