<template>
  <transition name="fade">
    <div
      v-if="show"
      class="modal bttom_show defaultModal mdll_removeStand fade show"
      style="display: block"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body">
            <div class="content">
              <div class="flex items-start">
                <div class="icon">
                  <slot name="icon"></slot>
                </div>
                <div class="media-body">
                  <slot name="body"></slot>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              @click="closeModal()"
              class="btn btn__cancel mr-1 size-15 color-text min-w-100 h-10 flex items-center rounded-lg justify-center"
            >
              {{ labelCancel }}
            </button>
            <button
              @click="clickConfirm()"
              class="btn bg-primary min-w-100 m-0 size-15 color-white h-10 flex items-center rounded-lg justify-center"
            >
              {{ labelConfirm }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    labelConfirm: {
      type: String,
      required: false,
      default: 'Remove',
    },
    labelCancel: {
      type: String,
      required: false,
      default: 'Cancel',
    },
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    closeModal() {
      this.show = false;
      document.querySelector('body').classList.remove('overflow-hidden');
      this.$emit('close-modal');
    },
    openModal() {
      this.show = true;
      document.querySelector('body').classList.add('overflow-hidden');
      this.$emit('open-modal');
    },
    clickConfirm() {
      this.closeModal();
      this.$emit('confirm');
    },
  },
};
</script>

<style lang="css" scoped></style>
