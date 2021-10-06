<template>
    <div>
        <slot />
        <BottomNavigation />
    </div>
</template>

<script>
import BottomNavigation from "@/components/BottomNavigation";
export default {
    components: {
        BottomNavigation
    }
};
</script>

<style lang="scss" scoped></style>
