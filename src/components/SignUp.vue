<template>
  <div class="text-center p-5 mt-10">
    <i
      class="fa-solid fa-utensils text-6xl rounded-full border-4 p-8 border-red-700 text-red-800"
    ></i>
    <h2 class="text-4xl text-red-400 font-medium uppercase mt-4">sign up</h2>
  </div>
  <div class="register text-center flex flex-col w-96 mx-auto space-y-4 mt-10">
    <input
      required
      v-model="name"
      class="border-2 border-red-700 p-2 block rounded"
      type="text"
      placeholder="Enter Name"
    />
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
      v-on:click="handleSignUp"
      class="border-2 border-red-700 p-2 block rounded bg-red-700 text-white uppercase font-bold"
    >
      Signup
    </button>
    <p class="text-rose-400">
      Already Have an Account? Please
      <router-link class="text-red-700" to="/login">LOGIN</router-link>
    </p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async handleSignUp() {
      try {
        console.warn("signup", this.email, this.password);
        let result = await axios.post("http://localhost:3000/users", {
          name: this.name,
          email: this.email,
          password: this.password,
        });
        console.warn(result);
        if (result.status == 201) {
          alert("sign up done");
        }
        localStorage.setItem("user-info", JSON.stringify(result.data));
        this.$router.push({ name: "Home" });
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
