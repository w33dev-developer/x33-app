<template>
  <img
    src="/x33-icon.png"
    alt="X33 Logo"
    class="object-contain"
    :style="progress === undefined ? undefined : { opacity: 0.35 + (progress / 100) * 0.65 }"
  />
</template>

<script setup lang="ts">
// X33: Logo ist das X33-Icon (Datenpaket mit 33-Schloss). Der Fortschritt steuert nur die Deckkraft.
defineProps<{ progress?: number }>();
</script>
