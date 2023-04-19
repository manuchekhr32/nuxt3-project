<template>
  <div>
    <h1>Error: {{ error.statusCode }}</h1>
    <pre>{{ error }}</pre>
  </div>
</template>
<script setup lang="ts">
import { NuxtError } from '#app'

interface Props {
  error: NuxtError
}
defineProps<Props>()
</script>
