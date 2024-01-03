<template>
  <v-container>
    <v-row cols="12">
      <v-col>
        <v-text-field label="Test field"/>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="auto">
        <v-btn :to="{ name: 'Home' }">Home</v-btn>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="auto">
        <v-btn @click="action()">Action</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { StatusBar } from '@capacitor/status-bar'
import { ref } from 'vue'

const status = ref(false)

async function action () {
  if (status.value) {
    StatusBar.show()
    status.value = false
  } else {
    StatusBar.hide()
    status.value = true
  }
}
</script>
