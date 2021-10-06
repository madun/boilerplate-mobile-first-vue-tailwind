<template>
  <div>
    <textarea
      class="form-control"
      :class="textError ? 'is-invalid' : null"
      rows="2"
      :placeholder="placeholder"
      @input="updateValue($event.target.value)"
    ></textarea>
    <div v-if="textError" class="invalid-feedback">
      {{ textError }}
    </div>
    <div v-if="textInfo" class="color-text size-12">
      {{ textInfo }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      required: true,
      default: 'placeholder',
    },
    textError: {
      type: String,
      required: false,
    },
    textInfo: {
      type: String,
      required: false,
    },
  },
  methods: {
    updateValue: function(value) {
      this.$emit('input', value.toUpperCase());
    },
  },
};
</script>

<style lang="scss" scoped></style>
