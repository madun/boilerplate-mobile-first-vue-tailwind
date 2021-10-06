<template>
  <div class="bg-white pt-24 px-5 h-screen">
    <ValidationObserver ref="formLogin" v-slot="{ handleSubmit, invalid }">
      <form
        method="post"
        @submit.prevent="handleSubmit(onSubmit)"
        class="mt-16"
      >
        <ValidationProvider
          v-slot="{ errors }"
          name="email"
          rules="required|email"
        >
          <div class="form-group">
            <label>Email</label>
            <InputText
              v-model="formData.email"
              inputType="email"
              placeholder="Email"
              :textError="errors[0]"
              maxlength="16"
            />
          </div>
        </ValidationProvider>

        <ValidationProvider
          v-slot="{ errors }"
          name="password"
          rules="required"
        >
          <div class="form-group">
            <label>Password</label>
            <InputText
              v-model="formData.password"
              :inputType="isShowPassword ? 'text' : 'password'"
              placeholder="enter your password"
              :textError="errors[0]"
              :hasIcon="true"
              @clickIcon="isShowPassword = !isShowPassword"
            >
              <template #icon>
                <div>
                  <Eye class="w-5" v-if="isShowPassword" />
                  <EyeSlash class="w-5" v-else />
                </div>
              </template>
            </InputText>
          </div>
        </ValidationProvider>
        <div class="mt-6 text-center">
          <router-link to="/" class="size-14 text-primary"
            >Lupa password? Klik disini</router-link
          >
        </div>
        <div class="mt-16 flex justify-center">
          <Button
            :loading="isLoading"
            :disabled="invalid || isLoading"
            :label="isLoading ? 'Mohon tunggu' : 'Masuk'"
            type="submit"
          />
        </div>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate';
import { required, email } from '@validations';
import { ref } from '@vue/composition-api';
import Button from '@/components/Button.vue';
import InputText from '@/components/InputText.vue';

export default {
  components: {
    ValidationObserver,
    ValidationProvider,
    Button,
    InputText,
  },
  setup(props, { root }) {
    const errorRes = ref('');
    const isShowPassword = ref(false);
    const isLoading = ref(false);
    const formData = ref({
      email: '',
      password: '',
    });

    function onClickBack() {
      console.log('log');
    }

    async function onSubmit() {
      errorRes.value = '';
      isLoading.value = true;
      try {
        await root.$store.dispatch('LogIn', formData.value);
        await root.$store.dispatch('getUser');
        root.$router.push('/');
      } catch (response) {
        if (response.data.error) {
          errorRes.value = response.data.error.email[0];
        } else {
          const { message } = response.data;
          errorRes.value = message;
        }
      }
      isLoading.value = false;
    }

    return {
      isShowPassword,
      errorRes,
      isLoading,
      formData,
      // method
      onClickBack,
      onSubmit,
    };
  },
};
</script>

<style lang="scss" scoped></style>
