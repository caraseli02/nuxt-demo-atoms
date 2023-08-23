<template>
  <button :class="buttonClass" :disabled="disabled" @click="handleClick" :aria-label="ariaLabel || 'Button'"
    data-test="btn">
    <slot name="icon" />
    <slot>{{ label }}</slot>
  </button>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

type ButtonType = 'ambiente' | 'economia' | 'mundo' | 'non-profit' | 'politica' | 'societa' | 'welfare'
type ButtonSize = 'S' | 'M' | 'L' | 'XL'
const { label, btnType, disabled = false, ariaLabel, btnSize = 'L' } = defineProps<{
  btnType: ButtonType,
  disabled: boolean,
  ariaLabel: string,
  btnSize: ButtonSize,
  label: string
}>()

const isActive = ref(false)
const buttonClass = computed(() => {
  return [
    'atoms-button',
    {
      'atoms-button-disabled': disabled,
    },
    `atoms-button-${btnSize}`,
    isActive.value ? btnType : ''
  ];
})
const handleClick = () => {
  if (btnType) {
    isActive.value = !isActive.value;
  }
}
</script>

<style scoped>
.atoms-button {
  display: inline-flex;
  gap: 0.25rem;
  border-radius: 0.25rem;
  border: 1px solid #000;
  background: #FFF;
  box-shadow: -2px 2px 0px 0px #000;
  color: #000;
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 700;
  text-transform: uppercase;
  transition: all 0.3s linear;
}

.atoms-button:hover {
  color: rgba(0, 0, 0, .5);
}

.atoms-button-S {
  height: 1.25rem;
  padding: 0.25rem 0.75rem;
  align-items: flex-start;
  flex-shrink: 0;
}

.atoms-button-M {
  height: 1.75rem;
  padding: 0.5rem 0.75rem;
  align-items: center;
  flex-shrink: 0;
}

.atoms-button-L {
  padding: 0.75rem 1rem;
  align-items: center;
}

.atoms-button-XL {
  display: inline-flex;
  padding: 0.75rem 1.5rem;
  align-items: center;
  font-size: 1.125rem;
}

.ambiente {
  background-color: #E2F1E8;
}

.economia {
  background-color: #E2E8F1;
}

.mundo {
  background-color: #F1DADA;
}

.non-profit {
  background-color: #F0E2F1;
}

.politica {
  background-color: #F1F1E2;
}

.societa {
  background-color: #E2F0F1;
}

.welfare {
  background-color: #F5E6E0;
}
</style>
