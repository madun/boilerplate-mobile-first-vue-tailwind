<template>
  <!-- <div class="w-full"> -->
  <button
    :type="type"
    :disabled="disabled"
    class="btn rounded-lg btn__default"
    :class="disabled ? 'bg-gray-300' : 'bg-primary'"
  >
    <span class="color-white">{{ label }}</span>
    <div class="icon rounded-full text-gray-100">
      <Spinner v-if="loading" :type="loadingType" />
      <ArrowRight v-else />
    </div>
  </button>
</template>

<script>
import Spinner from '@/components/Spinner';
import ArrowRight from '@/assets/icons/outline/arrow-right-3.svg';
export default {
  components: {
    ArrowRight,
    Spinner,
  },
  props: {
    type: {
      type: String,
      required: false,
      default: 'button',
    },
    label: {
      type: String,
      required: false,
      default: 'Continue',
    },
    disabled: {
      type: Boolean,
      required: false,
    },
    loading: {
      type: Boolean,
      required: false,
      default: false,
    },
    loadingType: {
      type: String,
      required: false,
      default: 'light',
    },
  },
};
</script>

<style lang="scss" scoped></style>
