<template>
  <button
    :class="`btn ${variation} ${disabled ? 'disabled' : ''}${
      active ? 'active' : ''
    }`"
    @click="disabled ? '' : $emit('clickBtn')"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    variation: {
      type: String,
      default: "default",
    },
    text: { type: String, default: "Button" },
    disabled: Boolean,
    active: Boolean,
  },
  setup() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.btn {
  width: 100%;
  max-height: 100%;
  font-size: 16px;
  border-radius: 10px;
  letter-spacing: 1.5px;
  cursor: pointer;
  padding: 13px 20px;
  color: $c-accent;
  font-weight: 500;
  &:hover,
  &.active,
  &:focus {
    outline: none;
  }
  &.disabled {
    cursor: default;
    pointer-events: none;
    color: gray;
  }
}

.default {
  color: $c-primary;
  font-size: 18px;
}

.primary {
  background-color: $c-primary;
  &:hover,
  &.active,
  &:focus {
    outline: none;
    background-color: $c-secondary;
  }
}

.secondary {
  background-color: $c-secondary;
  &:hover,
  &.active,
  &:focus {
    outline: none;
    background-color: darkred;
  }
}
</style>
