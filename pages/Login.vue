<template>
  <div class="login-container">
    <Twitter class="twitter-logo" />
    <p class="heading">Sign in to Twitter</p>
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
      <b-button @click.prevent="verifyUser" pill class="signin-button" variant="dark">Sign In</b-button>
    </div>
    <p class="footer">
      Don't have an account? <nuxt-link to="/signup">Sign Up</nuxt-link>
    </p>
  </div>
</template>
<!-- signInWithEmailAndPassword -->
<script>
import Twitter from "../components/Logo/Twitter.vue";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
 methods: {
    clearFields(){
        this.email = "";
        this.password = "";
    },
    async verifyUser() {
      console.log("User verification clicked ....");

        try {
          await this.$fire.auth.signInWithEmailAndPassword(
            this.email,
            this.password,  
          );
          this.$store.commit('SET_AUTHENTICATION', true);
            console.log("user status>>",this.$store.state.user);
          console.log("Successfully Logged in...");
          window.location = "/";
          this.clearFields();
        } catch (e) {
          console.log(e);
          this.clearFields();
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
  margin-top: 10px;
}
</style>
