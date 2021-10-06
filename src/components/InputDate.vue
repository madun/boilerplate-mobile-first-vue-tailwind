<template>
  <div>
    <div :class="textError || hasIcon ? 'input_group' : null">
      <input
        :type="inputType"
        class="form-control"
        :class="textError ? 'is-invalid' : null"
        :placeholder="placeholder"
        @input="updateValue($event.target.value)"
        :maxlength="maxlength"
        v-mask="'##/##/####'"
      />
      <button
        v-if="hasIcon"
        type="button"
        class="btn icon_input color-text"
        @click="onClickIcon"
      >
        <slot name="icon"></slot>
      </button>
    </div>
    <div v-if="textError" class="invalid-feedback">
      {{ textError }}
    </div>
    <div v-if="textInfo" class="color-text">
      {{ textInfo }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    hasIcon: {
      type: Boolean,
      required: false,
      default: false,
    },
    inputType: {
      type: String,
      required: false,
      default: 'text',
    },
    placeholder: {
      type: String,
      required: false,
      default: 'DD/MM/YYYY',
    },
    textError: {
      type: String,
      required: false,
    },
    textInfo: {
      type: String,
      required: false,
    },
    maxlength: {
      type: String,
      required: false,
      default: '10',
    },
  },
  methods: {
    onClickIcon(event) {
      this.$emit('clickIcon', event);
    },
    updateValue: function(value) {
      this.$emit('input', value);
    },
  },
};
</script>

<style lang="scss" scoped></style>
