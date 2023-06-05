<template>
  <div class="registerForm">
    <div class="containerLog">
      <div class="forms">
        <div class="form login">
          <span class="title">Реєстрація</span>

          <form class="card auth-card" @submit.prevent="submitHandler">
            <div class="input-field">
              <input 
                type="text" 
                placeholder="Введіть своє ім'я" 
                v-model.trim="state.name"
              />
              <i class="uil uil-user"></i>
            </div>
            <label 
              for="email" 
              class="value-error" 
              v-if="v$.name.$error"
            >
              *{{ v$.name.$errors[0].$message }}
            </label>
            <div class="input-field">
              <input 
                type="text" 
                placeholder="Введіть свій email"
                v-model="state.email"
              />
              <i class="uil uil-envelope icon"></i>
            </div>
            <label for="email" class="value-error" v-if="v$.email.$error">
              *{{ v$.email.$errors[0].$message }}
            </label>
            <div class="input-field">
              <input
                v-if="state.showPassword"
                v-model="state.password.password"
                class="input"
                type="password"
                placeholder="Введіть пароль"
              />
              <input
                v-else
                v-model="state.password.password"
                class="input"
                type="password"
                placeholder="Введіть пароль"
              />
              <i class="uil uil-lock icon"></i>
            </div>
            <label for="email" class="value-error" v-if="v$.password.password.$error">
              *{{ v$.password.password.$errors[0].$message }}
            </label>
            <div class="input-field">
              <input
                v-if="state.showPassword"
                v-model="state.password.confirm"
                class="input"
                type="text"
                placeholder="Підтвердіть пароль"
              />
              <input
                v-else
                v-model="state.password.confirm"
                class="input"
                type="password"
                placeholder="Підтвердіть пароль"
              />
              <i class="uil uil-lock icon"></i>
              <i class="uil showHidePw"
                :class="{
                  'uil-eye-slash': !state.showPassword,
                  'uil-eye': state.showPassword,
                }"
                @click="toggleShow"></i>
            </div>
              <label for="email" class="value-error" v-if="v$.password.confirm.$error">
                *{{ v$.password.confirm.$errors[0].$message }}
              </label>
            <div class="checkbox-text">
              <div class="checkbox-content">
                <input 
                  type="checkbox" 
                  id="logCheck" 
                  v-model="agree"
                />
                <label for="logCheck" class="text">З правилами згідний</label>
              </div>

              <a href="#" class="text">Забули пароль?</a>
            </div>
              <button @click="submitForm" class="input-field button" type="submit">Зареєструватись</button>
          </form>

          <div class="login-signup">
            <span class="text"
              >Вже зареєстровані?
              <router-link :to="{name: 'login'}" class="text signup-text">Увійти в систему</router-link >
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import useValidate from '@vuelidate/core';
import {required, email, minLength, sameAs} from '@vuelidate/validators';
import {reactive, computed} from 'vue';
export default {
  name: "RegisterForm",
    setup() {
    const state = reactive({
      showPassword: false,
      name: '',
      email: '',
      password: {
        password: '',
        confirm: '',
      },
      // agree: false,
    })
   
    const rules = computed(() => {
      return {
        name: {required},
        email: {required, email},
        password: {
          password: {required, minLength: minLength(6)},
          confirm: {required, sameAs: sameAs(state.password.password)},
        },
        // agree: {checked: v => v}
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
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
      }
      console.log(formData);
    } 
  },
  computed: {
    buttonLabel() {
      return (this.showPassword) ? "Show" : "Hide";
    }
  }
};
</script>

<style lang="scss">
  .registerForm, .loginForm {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .containerLog {
    position: relative;
    max-width: 430px;
    width: 100%;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  }

  .containerLog .forms {
    align-items: center;
    width: 200%;
  }

  .containerLog .form {
    width: 50%;
    padding: 30px;
  }

  .containerLog .form .title {
    position: relative;
    font-size: 27px;
    font-weight: 600;
  }

  .form .title::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 3px;
    width: 30px;
    background-color: #A5D364;
    border-radius: 25px;
  }

  .form .input-field {
    margin-top: 30px;
  }

  .input-field {
    position: relative;
    height: 50px;
    width: 100%;
    margin-top: 30px;
  }

  .input-field input {
    position: absolute;
    height: 100%;
    width: 100%;
    padding: 0 35px;
    border: none;
    outline: none;
    font-size: 16px;
    border-bottom: 2px solid #ccc;
    border-top: 2px solid transparent;
    transition: all 0.2s ease;
  }

  .input-field input:is(:focus, :valid) {
    border-bottom-color: #A5D364;
  }

  .input-field i {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: #999;
    font-size: 23px;
  }

  .input-field input:is(:focus, :valid) ~ i {
    color: #A5D364;
  }

  .input-field i.showHidePw {
    right: 0;
    cursor: pointer;
    padding: 10px;
  }

  .form .checkbox-text {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    font-size: 14px;
  }

  .checkbox-text .checkbox-content {
    display: flex;
    align-items: center;
  }

  .checkbox-content input {
    margin: 0 8px -2px 4px;
    accent-color: #A5D364;
  }

  .form .text {
    color: #333;
    font-size: 14px;
  }

  .form a.text {
    color: #A5D364;
    text-decoration: none;
  }

  .form a:hover {
    text-decoration: underline;
  }

  .form .button {
    margin-top: 35px;
  }

  .form .button{
    border: none;
    color: #fff;
    font-size: 17px;
    font-weight: 500;
    letter-spacing: 1px;
    border-radius: 6px;
    background-color: #A5D364;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .button:hover {
    background-color: #8bb43c;
  }

  .form .login-signup {
    margin-top: 30px;
    text-align: center;
  }
</style>
