<template>
  <div class="responsive-card">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.responsive-card {
  background-color: #ffffff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 20px;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
}
</style>
