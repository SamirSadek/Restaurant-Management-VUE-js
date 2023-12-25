<template>
  <div class="text-center p-5 mt-10">
    <i
      class="fa-solid fa-utensils text-6xl rounded-full border-4 p-8 border-red-700 text-red-800"
    ></i>
    <h2 class="text-4xl text-red-400 font-medium uppercase mt-4">Log In</h2>
  </div>
  <div class="login text-center flex flex-col w-96 mx-auto space-y-4 mt-10">
    <input
      required
      v-model="email"
      class="border-2 border-red-700 p-2 block rounded"
      type="Email"
      placeholder="Enter Email"
    />
    <input
      required
      v-model="password"
      class="border-2 border-red-700 p-2 block rounded"
      type="password"
      placeholder="Enter Password"
    />
    <button
      v-on:click="handleLogin"
      class="border-2 border-red-700 p-2 block rounded bg-red-700 text-white uppercase font-bold"
    >
      login
    </button>
    <p class="text-rose-400">
      Not registered? Please
      <router-link class="text-red-700" to="/signup">SIGNUP</router-link>
    </p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SignUp",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async handleLogin() {
      try {
        console.warn("login", this.email, this.password);
        let result = await axios.get(
          `http://localhost:3000/users?email=${this.email}&password=${this.password}`
        );
        console.warn(result);
        if (result.status == 200 && result.data.length > 0) {
          alert("log in done");
          localStorage.setItem("user-info", JSON.stringify(result.data[0]));
          this.$router.push({ name: "Home" });
        }

        // Handle successful response
      } catch (error) {
        console.error("Error signing up:", error);
        // Handle error - show a message to the user or perform necessary actions
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({ name: "Home" });
    }
  },
};
</script>
