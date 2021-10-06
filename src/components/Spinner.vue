<template>
  <div class="spinner_loading">
    <div
      :style="
        type == 'light'
          ? 'background-color: var(--light);'
          : 'background-color: var(--secondary);'
      "
      class="bounce1"
    ></div>
    <div
      :style="
        type == 'light'
          ? 'background-color: var(--light);'
          : 'background-color: var(--secondary);'
      "
      class="bounce2"
    ></div>
    <div
      :style="
        type == 'light'
          ? 'background-color: var(--light);'
          : 'background-color: var(--secondary);'
      "
      class="bounce3"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: false,
      default: 'dark',
    },
  },
};
</script>

<style lang="css" scoped>
.spinner_loading {
  text-align: center;
  margin-bottom: 10px;
}

.spinner_loading > div {
  width: 7px;
  height: 7px;
  border-radius: 100%;
  display: inline-block;
  -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  animation: sk-bouncedelay 1.4s infinite ease-in-out both;
}

.spinner_loading .bounce1 {
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}

.spinner_loading .bounce2 {
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}

@-webkit-keyframes sk-bouncedelay {
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
  }
  40% {
    -webkit-transform: scale(1);
  }
}
@-moz-keyframes sk-bouncedelay {
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
  }
  40% {
    -webkit-transform: scale(1);
  }
}
@keyframes sk-bouncedelay {
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
  }
  40% {
    -webkit-transform: scale(1);
  }
}
</style>
