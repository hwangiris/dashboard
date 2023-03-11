<template>
  <div class="textfield-item">
    <div
      class="textfield-floating"
      :class="{
        'has-value': value,
        'has-icon': newType === 'password',
      }"
    >
      <input
        :type="newType"
        :id="id"
        :placeholder="placeholder"
        v-model="value"
        :value="value"
      >
      <label :for="id">{{ label }}</label>
      <IconEye
        v-if="type === 'password'"
        :class="{
          'text-dark': newType === 'password',
          'text-primary': newType === 'text'
        }"
        @click="newType === 'password' ? newType = 'text' : newType = 'password'"
      />
    </div>
    <template v-if="newType === 'text' && type === 'password'">
      <ul class="validation list-reset mt-8">
        <li :class="{'validation-true': isCharacters()}">
          <IconCircleCheck /> 8 Characters min.
        </li>
        <li :class="{'validation-true': isNumber()}">
          <IconCircleCheck /> One number
        </li>
      </ul>
    </template>
  </div>
</template>

<script>
import IconEye from '@/components/IconEye.vue';
import IconCircleCheck from '@/components/IconCircleCheck.vue';

export default {
  data() {
    return {
      newType: this.type,
      value: '',
    };
  },
  props: ['type', 'id', 'label', 'placeholder'],
  components: {
    IconEye,
    IconCircleCheck,
  },
  methods: {
    isCharacters() {
      if (this.value.length > 8) {
        return true;
      }
      return false;
    },
    isNumber() {
      return /[0-9]/.test(this.value);
    },
  },
  watch: {
    type() {
      this.newType = this.type;
    },
    value() {
      this.isCharacters();
      this.isNumber();
    },
  },
};
</script>

<style lang="scss" scoped>
  @import "@/assets/sass/mixin";
  @import "@/assets/sass/variable";

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: color 5000000s ease-in-out 0s,
    background-color 5000000s ease-in-out 0s;
  }

  .textfield-floating {
    position: relative;
    font-size: $h4;
    label {
      position: absolute;
      top: px2rem(16);
      left: px2rem(12);
      color: $gray-400;
      transition: all 0.3s;
    }
    input {
      width: 100%;
      padding: px2rem(16) px2rem(12);
      border: 0;
      background-color: $background;
      @at-root .has-icon#{&} {
        padding-right: px2rem(40);
      }
      @at-root .has-value#{&},
      &:hover {
        + label {
          top: px2rem(8);
          transform: scale(0.7142857143);
          transform-origin: top left;
        }
      }
      @at-root .has-value#{&},
      &:focus {
        padding-top: px2rem(22);
        padding-bottom: px2rem(10);
      }
    }
    svg {
      position: absolute;
      top: 50%;
      right: $h4;
      cursor: pointer;
      transform: translateY(-50%);
    }
  }

  ul.validation {
    display: flex;
    align-items: center;
    li {
      display: flex;
      align-items: center;
      gap: px2rem(4);
      color: $gray-300;
      font-size: px2rem(12);
      line-height: 1.2;
      transform: scale(0.8333333333);
      transform-origin: center left;
      svg {
        width: px2rem(13);
        height: px2rem(13);
      }
      &.validation-true {
        color: $black;
        svg {
          color: #4AE7A5;
        }
      }
    }
  }
</style>
