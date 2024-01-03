<template>
  <ion-app>
    <v-app class="safe-area">
      <nav-drawer/>
      <router-view/>
    </v-app>
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp } from '@ionic/vue'
import NavDrawer from '@/components/NavDrawer.vue'
</script>
