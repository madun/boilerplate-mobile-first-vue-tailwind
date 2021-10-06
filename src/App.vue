<template>
  <div id="app">
    <AppLayout>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </AppLayout>
  </div>
</template>

<script>
import AppLayout from '@/layouts/AppLayout';
export default {
  name: 'App',
  components: { AppLayout },
};
</script>

<style>
#app {
  max-width: 480px;
  margin: 0 auto;
}
</style>
