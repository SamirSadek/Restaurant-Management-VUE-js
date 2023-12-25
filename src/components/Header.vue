<template>
  <header class="container mx-auto p-5 bg-red-700 text-white mt-2 rounded font-bold">
    <nav class="flex justify-between items-center">
      <div>
        <h2>Logo</h2>
      </div>
      <div class="flex justify-between items-center gap-5">
        <router-link
          class="bg-red-900 p-2 rounded hover:bg-white hover:text-red-700"
          to="/"
          >Home</router-link
        >
        <router-link
          class="bg-red-900 p-2 rounded hover:bg-white hover:text-red-700"
          to="/add"
          >Add Restaurant</router-link
        >
        <router-link
          class="bg-red-900 p-2 rounded hover:bg-white hover:text-red-700"
          to="/update"
          >Update Restaurant</router-link
        >
        <a
          v-on:click="logout"
          class="bg-red-900 p-2 rounded hover:bg-white hover:text-red-700"
          href=""
          >Logout</a
        >
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ name: "Login" });
      console.warn("logout");
    },
  },
};
</script>

<style lang="scss" scoped></style>
