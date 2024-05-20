<script setup lang="ts">
</script>

<template>
  <div class="tabs-container">
    <h1>This is the list of our activities</h1>
    <br>
    <div class="tabs">
      <button v-for="tab in tabs" :key="tab.name" @click="selectedTab = tab.name" :class="{ active: selectedTab === tab.name }">
        {{ tab.name }}
      </button>
    </div>
    <div class="tab-content">
      <component :is="currentTabComponent" v-if="currentTabComponent"></component>
    </div>
  </div>
</template>

<script>
import Projects from '../pages/projects/index.vue';
import Services from '../pages/services/index.vue';


export default {
  data() {
    return {
      selectedTab: 'Projects',
      tabs: [
        { name: 'Projects', component: Projects },
        { name: 'Services', component: Services },
      ]
    };
  },
  computed: {
    currentTabComponent() {
      const tab = this.tabs.find(tab => tab.name === this.selectedTab);
      return tab ? tab.component : null;
    }
  }
};
</script>

<style scoped>
.tabs-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
}

.tabs {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

button {
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
  background-color: #f0f0f0;
  border-radius: 4px;
  font-size: 50px;
}

button.active {
  background-color: #007bff;
  color: white;
}

.tab-content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh; /* Adjust as necessary */
  width: 100%;
}
</style>
