<template>
  <div :class="`text-input ${color} ${variation} ${error ? 'error' : ''}`">
    <label>{{ label }}</label>
    <input
      :type="password ? 'password' : 'text'"
      :value="value"
      @input="handleChange"
      @blur="$emit('blur')"
    />
    <span v-if="error" class="text-input__error-field">{{ errorMsg }}</span>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    color: { type: String, default: "" },
    variation: String,
    value: { type: String, default: "" },
    password: { type: Boolean, default: false },
    error: { type: Boolean, default: false },
    errorMsg: { type: String, default: "" },
  },
  setup(_, { emit }) {
    function handleChange(e) {
      emit("changeValue", e.target.value)
    }
    return { handleChange }
  },
}
</script>

<style lang="scss" scoped>
.text-input {
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 8px;
    color: $c-secondary;
    font-size: 22px;
    letter-spacing: 1.2px;
  }
  input {
    padding: 5px;
    border: none;
    font-size: 20px;
    border-bottom: 2px solid;
    color: $c-primary;
    background-color: transparent;
    &:focus {
      outline: none;
      border-color: $c-secondary;
    }
  }
  &__error-field {
    color: $c-white;
    padding: 5px;
    font-size: 20px;
    letter-spacing: 1.1;
  }

  &.error {
    label {
      color: $c-tertiary;
    }
    input {
      border-color: $c-tertiary;
      color: $c-tertiary;
    }
  }
}
.rounded {
  input {
    border: solid $c-primary 2px;
    border-radius: 7px;
    padding: 10px 15px;
  }
}
</style>
