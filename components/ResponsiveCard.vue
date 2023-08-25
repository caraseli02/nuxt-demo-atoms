<template>
  <div class="responsive-card">
    <slot></slot>
    <section class="content">
      <AppButton label="Loremmm" btn-size="S" />
      <div class="content-bottom">
        <h2 class="card-title">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h2>
        <AppAvatar class="avatar-font" title="Lorem isposn" subtitle="13 Luglio 2022" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  imgUrl?: string,
}>()
const imgUrl = computed(() => {
  return props.imgUrl || "url('https://picsum.photos/seed/{home}/1200/1300')";
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anybody:wght@400;700&display=swap');

.content {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 1.5rem;
}

.content-bottom{
  justify-self: end;
}

.responsive-card {
  background-image: v-bind(imgUrl);
  display: flex;
  width: 100%;
  height: 100%;
  padding: 2.75rem 2.5rem;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 1.5rem;
  background-size: cover;
  background-repeat: no-repeat;
}

.card-title {
  color: #FFF;
  font-family: Anybody;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 3.375rem;
  width: max(70vw, 24.375remm);
}

@media (min-width: 1250px) {
  .card-title {
  font-size: 2.5rem;
  width: max(60vw, 51.4375rem);

  }

  .responsive-card {
    padding: 1.5rem 1rem;
  }
}

.avatar-font {
  font-family: Anybody;
}
</style>
