<template>
  <div class="w-full">
    <section id="bottom-navigation" class="block fixed inset-x-0 bottom-0 z-10">
      <div id="tabs" class="flex justify-between mb-3 text-gray-400">
        <router-link
          to="/"
          class="w-full focus:text-primary hover:text-primary justify-center inline-block text-center pt-2 pb-1"
        >
          <HomeIcon class="w-6 inline-block mb-1" />
          <span class="tab tab-home block text-xs">Home</span>
        </router-link>
        <router-link
          to="/43"
          class="w-full focus:text-primary hover:text-primary justify-center inline-block text-center pt-2 pb-1"
        >
          <HomeIcon class="w-6 inline-block mb-1" />
          <span class="tab tab-home block text-xs">Home</span>
        </router-link>
        <router-link
          to="/4"
          class="w-full focus:text-primary hover:text-primary justify-center inline-block text-center pt-2 pb-1"
        >
          <UserIcon class="w-6 inline-block mb-1" />
          <span class="tab tab-home block text-xs">Home</span>
        </router-link>
        <div
          @click="logout"
          class="w-full focus:text-primary hover:text-primary justify-center inline-block text-center pt-2 pb-1"
        >
          <LogoutIcon class="w-6 inline-block mb-1" />
          <span class="tab tab-kategori block text-xs">Logout</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import HomeIcon from '@/assets/icons/outline/home-2.svg';
import LogoutIcon from '@/assets/icons/outline/logout.svg';
import UserIcon from '@/assets/icons/outline/user-square.svg';

export default {
  components: {
    HomeIcon,
    LogoutIcon,
    UserIcon,
  },
  methods: {
    logout() {
      this.$store.dispatch('LogOut');
      this.$router.push('/login');
    },
  },
};
</script>

<style lang="css" scoped>
#bottom-navigation {
  max-width: 480px;
  margin: 0 auto;
  border-top: 1px solid var(--border-snow);
  background-color: var(--bg-white);
}

.router-link-exact-active.router-link-active {
  /* @apply text-primary; */
}
</style>
