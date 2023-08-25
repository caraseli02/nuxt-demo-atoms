<template>
  <div>
    <AppTabs @tabChange="selectedTab = $event" class="py-6 px-10 hidden lg:block" :tabs="['Tutti i temi', ...tabs]" />
    <section
      class="py-4 px-6 lg:py-6 lg:px-10 flex gap-3 lg:gap-0 flex-col md:flex-row w-screen justify-between items-center bg-[#F4F4F4] border-b border-t border-black">
      <h4 class="font-bold leading-[2.875rem] w-full text-start text-lg lg:text-5xl capitalize">
        {{ selectedTab }}
      </h4>
      <div class="flex gap-2 lg:gap-4 flex-wrap lg:flex-nowrap shrink-0">
        <AppButton v-for="item in tabs" :label="item" :btnType="item" />
      </div>
    </section>
    <ResponsiveCard class="min-h-[32rem]" />
    <section class="flex flex-col lg:grid grid-rows-2 grid-cols-2 h-[52rem]">
      <ResponsiveCard imgUrl="url('https://picsum.photos/seed/{allarmi}/1200/1300')" class="row-span-2" />
      <ResponsiveCard imgUrl="url('https://picsum.photos/seed/{esperimenti}/1200/1300')" />
      <ResponsiveCard imgUrl="url('https://picsum.photos/seed/{ucraina}/1200/1300')" />
    </section>

  </div>
</template>

<script setup lang="ts">
const tabs = ['ambiente', 'economia', 'mundo', 'non-profit', 'politica', 'societa', 'welfare'] as const
const selectedTab = ref('Tutti i temi')

</script>

<style scoped>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateX(-150px);
}
</style>

<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap');

* {
  font-family: Raleway;
}
</style>
