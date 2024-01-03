<template>
  <div class="home fill-height">
    <div ref="map" class="ol-map"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import Map from 'ol/Map'
import TileLayer from 'ol/layer/Tile'
import { View } from 'ol'
import { OSM } from 'ol/source'
import { fromLonLat } from 'ol/proj'
import { Geolocation } from '@capacitor/geolocation'

let olMap: Map
const map = ref<HTMLElement>()
const userGeolocation = ref()

onMounted(async () => {
  olMap = new Map({
    layers: [
      new TileLayer({
        source: new OSM()
      })
    ],
    view: new View({
      center: fromLonLat([2.333333, 48.866667]), // Paris
      zoom: 14
    }),
    controls: []
  })

  olMap.setTarget(map.value!)

  await findUserGeolocation()
})

async function findUserGeolocation () {
  const position = await Geolocation.getCurrentPosition()
  userGeolocation.value = [position.coords.longitude, position.coords.latitude]
}

watch(userGeolocation, () => {
  if (userGeolocation.value) {
    olMap.getView().setCenter(fromLonLat(userGeolocation.value))
  }
})
</script>

<style lang="scss" scoped>
.ol-map {
  height: 100%;
  width: 100%;
}
</style>
