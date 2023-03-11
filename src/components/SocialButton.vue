<template>
  <button type="button" class="btn btn-outlined btn-100">
    <IconFacebook v-if="type === 'facebook'" />
    <IconGoogle v-if="type === 'google'" />
    {{ message }}
  </button>
</template>
<script>
// @ is an alias to /src
import IconFacebook from '@/components/IconFacebook.vue';
import IconGoogle from '@/components/IconGoogle.vue';

export default {
  props: ['type', 'message'],
  components: {
    IconFacebook,
    IconGoogle,
  },
};
</script>

<style lang="scss" scoped>
  @import "@/assets/sass/mixin";
  @import "@/assets/sass/variable";

  button {
    font-size: px2rem(13);
  }
</style>
