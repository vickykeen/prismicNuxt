<template>
  <div id="target">
      <slot />
  </div>
</template>

<script setup>
import SplitType from 'split-type'
onMounted(() => {
  const text = new SplitType('#target', { types: 'words, chars' })
})

</script>