<template>
  <div class="relative">
    <component :is="layout">
      <slot />
    </component>
  </div>
</template>

<script>
export default {
  name: 'AppLayout',
  computed: {
    layout() {
      const layoutIsGuest = this.$route.meta.layout || 'DefaultLayout';
      return () => import(`@/layouts/${layoutIsGuest}.vue`);
    },
  },
};
</script>
