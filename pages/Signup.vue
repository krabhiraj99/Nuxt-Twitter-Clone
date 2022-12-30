<template>
  <div class="login-container">
    <Twitter class="twitter-logo" />
    <p class="heading">Join Twitter Today</p>
    <div class="input-container">
      <b-form-input
        class="input-text"
        v-model="email"
        placeholder="Enter Email"
      ></b-form-input>
      <b-form-input
        class="input-password"
        v-model="password"
        type="password"
        placeholder="Enter Password"
      ></b-form-input>
      <b-form-input
        class="input-password"
        v-model="confirmPassword"
        type="password"
        placeholder="Confirm Password "
      ></b-form-input>
      <b-button pill class="signin-button" @click.prevent="createUser" variant="dark">Sign Up</b-button>
    </div>
    <p class="term-detail">
      By signing up, you agree to the
      <span class="hyper-link">Terms of Service</span> and
      <span class="hyper-link">Privacy Policy</span>, including
      <span class="hyper-link">Cookie Use.</span>
    </p>
    <p class="footer">
      Have an account already? <nuxt-link to="/login">Log In</nuxt-link>
    </p>
  </div>
</template>

<script>
import Twitter from "../components/Logo/Twitter.vue";
export default {
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    clearFields(){
        this.email = "";
        this.password = "";
        this.confirmPassword = "";
    },
    async createUser() {
      console.log("User clicked ....");

      if (this.password === this.confirmPassword) {
        try {
          await this.$fire.auth.createUserWithEmailAndPassword(
            this.email,
            this.password,  
          );
          console.log("User Created ....");
          this.clearFields();
          window.location = "/";
        } catch (e) {
          console.log(e);
          this.clearFields();
        }
      }
      else{
        console.log("Your Password does not Match.");
      }
    },
  },
  components: {
    Twitter,
  },
};
</script>

<style scoped>
.twitter-logo {
  margin-top: 30px;
  text-align: center;
}
.login-container {
  max-width: 450px;
  margin: auto;
  border: 1px solid lightgray;
  border-radius: 15px;
  padding: 15px;
  margin-top: 50px;
}
.input-container {
  display: flex;
  flex-direction: column;
}
.input-text {
  margin-bottom: 20px;
}
.heading {
  margin-top: 70px;
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 24px;
}
.signin-button {
  margin-top: 20px;
}

.term-detail {
  font-size: 13px;
  color: gray;
  margin: 10px 15px;
}

.hyper-link {
  color: rgb(29, 155, 240);
  cursor: pointer;
}

.hyper-link:hover {
  text-decoration: underline;
}

.footer {
  text-align: center;
  font-size: 14px;
  color: rgb(88, 87, 87);
}
.input-password{
    margin-bottom: 20px;
}
</style>
