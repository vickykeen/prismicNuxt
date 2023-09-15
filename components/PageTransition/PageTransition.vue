<template>
    <div class="page-transition">
      <slot />
    </div>
  </template>
  
  <style scoped>
  .page-transition {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    transition: transform 0.4s ease-in-out;
  }
  </style>