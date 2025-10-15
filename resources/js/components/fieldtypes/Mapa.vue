<template>
  <div>
    <label class="font-bold text-sm mb-1 block">{{ field.display }}</label>

    <div id="map" style="height: 300px; border-radius: 8px;"></div>

    <div class="mt-2 text-xs text-gray-500">
      <strong>Latitude:</strong> {{ value.lat || '-' }} |
      <strong>Longitude:</strong> {{ value.lng || '-' }}
    </div>
  </div>
</template>

<script>
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

export default {
  mixins: [Fieldtype],

  mounted() {
    const defaultLat = this.meta.default_lat
    const defaultLng = this.meta.default_lng
    const defaultZoom = this.meta.default_zoom

    // valor inicial
    const initialLat = this.value?.lat || defaultLat
    const initialLng = this.value?.lng || defaultLng

    this.map = L.map('map').setView([initialLat, initialLng], defaultZoom)

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(this.map)

    this.marker = L.marker([initialLat, initialLng], { draggable: true }).addTo(this.map)

    // clique no mapa
    this.map.on('click', (e) => {
      const { lat, lng } = e.latlng
      this.updateValue(lat, lng)
      this.marker.setLatLng(e.latlng)
    })

    // arrastar marcador
    this.marker.on('dragend', (e) => {
      const { lat, lng } = e.target.getLatLng()
      this.updateValue(lat, lng)
    })
  },

  methods: {
    updateValue(lat, lng) {
      this.value = { lat, lng }
    },
  },
}
</script>

<style>
#map {
  z-index: 1;
}
</style>
