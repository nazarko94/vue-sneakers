<template>
  <div class="loginForm" >
    <div class="containerLog">
      <div class="forms">
        <div class="form login">
          <span class="title">Логін</span>

          <form class="card auth-card" @submit.prevent="submitHandler">
            <div class="input-field">
              <input type="text" v-model="state.email" placeholder="Введіть свій email"/>
              <i class="uil uil-envelope icon"></i>
            </div>
            <label for="email" class="value-error" v-if="v$.email.$error">
              *{{ v$.email.$errors[0].$message }}
            </label>
            <div class="input-field">
              <input
                v-if="state.showPassword"
                v-model="state.password"
                class="input"
                type="text"
                placeholder="Введіть свій пароль"
              />
              <input
                v-else
                v-model="state.password"
                class="input"
                type="password"
                placeholder="Введіть свій пароль"
              />
              <i class="uil uil-lock icon"></i>
              <i
                class="uil showHidePw"
                :class="{
                  'uil-eye-slash': !state.showPassword,
                  'uil-eye': state.showPassword,
                }"
                @click="toggleShow"
              >
              </i>
            </div>
            <label for="password" class="value-error" v-if="v$.password.$error">
                *{{ v$.password.$errors[0].$message }}
              </label>
            <div class="checkbox-text">
              <div class="checkbox-content">
                <input type="checkbox" id="logCheck" />
                <label for="logCheck" class="text">Запам'ятати мене</label>
              </div>

              <a href="#" class="text">Забули пароль?</a>
            </div>
            <button @click="submitForm" class="input-field button" type="submit">Увійти</button>
          </form>

          <div class="login-signup">
            <span class="text"
              >Ще не зареєстровані?
              <router-link :to="{ name: 'register' }" class="text signup-text"
                >Зареєструватись</router-link
              >
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import useValidate from '@vuelidate/core';
import {required, email, minLength} from '@vuelidate/validators';
import {reactive, computed} from 'vue';
export default {
  name: "LoginForm",
  setup() {
    const state = reactive({
      showPassword: false,
      email: '',
      password: '',
    })

    const rules = computed(() => {
      return {
        email: {required, email},
        password: {required, minLength: minLength(6)},
      }
    })

    const v$ = useValidate(rules, state);

    return {
      state,
      v$
    }
  },
  methods: {
    toggleShow() {
      this.state.showPassword = !this.state.showPassword;
    }, 
    submitForm() {
      this.v$.$validate();
      if(!this.v$.$error) {
        this.$router.push('/catalog');
      }
      const formData = {
        email: this.state.email,
        password: this.state.password,
      }
      console.log(formData);
    }  
  },
  computed: {
    buttonLabel() {
      return (this.state.showPassword) ? "Show" : "Hide";
    }
  }  
};
</script>

<style lang="scss">
  .value-error {
    display: block;
    font-size: 10px;
    color: #f00;
    margin-top: 3px;
  }
</style>
