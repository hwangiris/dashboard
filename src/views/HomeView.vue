<template>
  <main class="bg-white">
    <button type="button" class="btn-link btn-black mx-16 mb-32">
      <IconArrow />Back
    </button>
    <div class="container">
      <div class="h2 my-0">
        Start from free
      </div>
      <h1 class="mt-8 mb-16">Create an account</h1>
      <div class="button-group">
        <SocialButton type="google" message="Sign up with Google" />
        <SocialButton type="facebook" message="Sign up with Google" />
      </div>
      <div class="division-with-line h4 mt-md-16 my-24">
        Or use your email for registration
        <hr >
      </div>
      <form action="#!" method="post">
        <div class="flex-2-column">
          <TextfieldComponent type="text" id="firstName" label="First Name" class="mb-16" />
          <TextfieldComponent type="text" id="lastName" label="Last Name" class="mb-16" />
        </div>
        <TextfieldComponent type="mail" id="email" label="E-mail" class="mb-16" />
        <TextfieldComponent type="password" id="password" label="Password" class="mb-16" />
        <label class="label-check my-24">
          <input type="checkbox" name="checked-privacy">
          <span class="label-check-mark"></span>
          <span class="label-check-txt h5 text-dark my-0">
            By creating account, you agree to accept our Privacy Policy,
            Terms of Service and Notification settings.
          </span>
        </label>
        <button type="submit" class="btn btn-100 btn-center btn-contained">
          Create an Free Account!
        </button>
        <p class="h5 text-center mt-16 mb-0">
          Already have an account?
          <a href="#!" class="text-link text-primary">
            <strong>Log in</strong>
          </a>
        </p>
      </form>
    </div>
  </main>
</template>

<script>
// @ is an alias to /src
import SocialButton from '@/components/SocialButton.vue';
import IconArrow from '@/components/IconArrow.vue';
import TextfieldComponent from '@/components/TextfieldComponent.vue';

export default {
  components: {
    SocialButton,
    IconArrow,
    TextfieldComponent,
  },
};
</script>

<style lang="scss" scoped>
  @import "@/assets/sass/mixin";
  @import "@/assets/sass/variable";
  main {
    width: 100%;
    max-width: 610px;
    padding-top: px2rem(30);
    padding-bottom: px2rem(30);
    margin: auto;
    border-radius: px2rem(4);
    @include apply-to-pad {
      padding: px2rem(24) px2rem(30);
      box-shadow: 0 5px 10px 5px rgba(#DEE7FF, .4);
    }
  }
  .container {
    max-width: calc(400px + #{$gutter*2});
  }
  .button-group {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: px2rem(16);
    @include apply-to-phone {
      flex-direction: row;
      gap: px2rem(20);
    }
  }
  .flex-2-column {
    @include apply-to-pad {
      display: flex;
      align-items: center;
      gap: px2rem(20);
      > * {
        width: calc(50% - 10px);
      }
    }
  }
  .division-with-line {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    hr {
      flex: 1 0 0;
    }
  }
</style>
