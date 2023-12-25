<template>
  <Header />
  <div>
    <h2 class="text-center my-5 text-3xl font-bold text-red-900">Add a New Restaurant</h2>
    <form
      action=""
      class="register text-center flex flex-col w-2/3 mx-auto space-y-4 mt-10"
    >
      <input
        name="name"
        v-model="restaurant.name"
        class="border-2 border-red-700 p-2 block rounded"
        type="text"
        placeholder="Enter your Restaurant Name"
      />
      <input
        name="address"
        v-model="restaurant.address"
        class="border-2 border-red-700 p-2 block rounded"
        type="text"
        placeholder="Enter Address"
      />
      <input
        name="contact"
        v-model="restaurant.contact"
        class="border-2 border-red-700 p-2 block rounded"
        type="text"
        placeholder="Enter Contact"
      />
      <button
        type="button"
        v-on:click="addRestaurant"
        class="border-2 border-red-700 p-2 block rounded bg-red-700 text-white uppercase font-bold"
      >
        Add New Restaurant
      </button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import Header from "./Header.vue";
export default {
  name: "Add",
  components: {
    Header,
  },
  data() {
    return {
      restaurant: {
        name: "",
        address: "",
        contact: "",
      },
    };
  },
  methods: {
    async addRestaurant() {
      console.warn(this.restaurant);
      const result = await axios.post("http://localhost:3000/restaurent", {
        name: this.restaurant.name,
        address: this.restaurant.address,
        contact: this.restaurant.contact,
      });
      if (result.status == 201) {
        this.$router.push({ name: "Home" });
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "Signup" });
    }
  },
};
</script>

<style lang="scss" scoped></style>
