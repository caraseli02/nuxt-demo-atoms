<template>
  <div class="container">
    <h4 class="themes-title">Title</h4>
    <section class="theme-btn">
      <Button v-for="theme in themes" :key="theme" :btnType="theme">
        {{ theme }}
      </Button>
    </section>
  </div>
</template>

<script setup lang="ts">
const themes = ['ambiente', 'economia', 'mundo', 'non-profit', 'politica', 'societa', 'welfare']
</script>

<style scoped>
.container {
  display: flex;
  width: 90rem;
  padding: 4rem 2.5rem;
  align-items: flex-start;
  gap: 2rem;
}

.theme-btns {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.themes-title {
  flex: 1 0 0;
  color: #010101;
  font-family: Anybody;
  font-size: 3.1875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.875rem;
}
</style>
