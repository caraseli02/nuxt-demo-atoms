<template>
  <section class="tabs-container">
    <!-- Navigation Tabs  -->
    <nav class="tabs">
      <!-- Loop over default o pased props -->
      <button v-for="(tab, index) in tabs" :key="index" @click="changeSelectedTab(tab)" class="tab">
        <!-- Scoped Slots -->
        <slot :tab="tab">
          <span class="tab-label" :class="{ active: selectedTab === tab }"> {{ tab }}</span>
        </slot>
      </button>
    </nav>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
const props = defineProps<{
  tabs: string[]
}>()
const selectedTab = ref<string | null>(null)
const changeSelectedTab = (tab: string) => {
  selectedTab.value = tab;
}
onMounted(() => {
  changeSelectedTab(props.tabs[0]);
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;

  background: transparent;

  /* inherit font & color from ancestor */
  color: inherit;
  font: inherit;

  /* Normalize `line-height`. Cannot be changed from `normal` in Firefox 4+. */
  line-height: normal;

  /* Corrects font smoothing for webkit */
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;

  /* Corrects inability to style clickable `input` types in iOS */
  -webkit-appearance: none;
}

/* Remove excess padding and border in Firefox 4+ */
button::-moz-focus-inner {
  border: 0;
  padding: 0;
}

.tabls-container {
  display: flex;
  padding: 1.5rem 2.5rem;
  align-items: center;
  gap: 0.625rem;
  align-self: stretch;
}

.tabs {
  display: flex;
  height: 3rem;
  padding-right: 0px;
  align-items: flex-start;
  gap: 2rem;
  flex: 1 0 0;
}

.tab {
  display: block;
  height: 100%;
  color: #000;
  font-family: Raleway;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: capitalize;
  position: relative;
  cursor: pointer;

}

.tab-label {
  display: block;
}

.tab {
  ::before {
    content: '';
    width: 100%;
    height: 0px;
    bottom: 0;
  }
}

@keyframes oneBefore {
  0% {
    width: 50%;
    opacity: 0;
  }

  100% {
    width: 100%;
    opacity: 1;
  }
}

.active::before {
  content: '';
  width: 100%;
  height: 2px;
  position: absolute;
  bottom: 0;
  border-bottom: 0.5625rem solid #FF2C33;
  animation: oneBefore 1s;
  transform: translateY(15px);
  opacity: 1;
}
</style>
