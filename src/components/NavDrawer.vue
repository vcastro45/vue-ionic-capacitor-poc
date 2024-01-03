<template>
  <v-btn icon="mdi-menu"
         variant="text"
         color="primary"
         @click="open = true"
         class="drawer-opener"/>

  <v-navigation-drawer v-model="open" temporary class="safe-area">
    <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg"
        title="Pizzas de la Mama"
    ></v-list-item>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item prepend-icon="mdi-view-dashboard" title="Home" value="home"></v-list-item>
      <v-list-item prepend-icon="mdi-forum" title="About" value="about"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const open = ref<boolean>(false)
</script>

<style lang="scss" scoped>
.drawer-opener {
  position: absolute;
  z-index: 1;
  left: 10px;
  top: 10px;
}
</style>
