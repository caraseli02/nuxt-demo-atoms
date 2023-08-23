<template>
  <button
    :class="buttonClass"
    :disabled="disabled"
    @click="handleClick"
    :aria-label="ariaLabel"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'atomsButton',
  props: {
    type: String,
    disabled: Boolean,
    ariaLabel: String,
  },
  computed: {
    buttonClass() {
      return [
        'atoms-button',
        {
          'atoms-button-primary': this.type === 'primary',
          'atoms-button-secondary': this.type === 'secondary',
          'atoms-button-disabled': this.disabled,
        },
      ];
    },
  },
  methods: {
    handleClick() {
      if (!this.disabled) {
        this.$emit('click');
      }
    },
  },
};
</script>

<style scoped>
.atoms-button {
  display: inline-flex;
  padding: 0.75rem 1rem;
  align-items: center;
  gap: 0.25rem;
  border-radius: 0.25rem;
  border: 1px solid #000;
  background: #FFF;
  box-shadow: -2px 2px 0px 0px #000;
}

/* ... rest of the styles ... */
</style>
