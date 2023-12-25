<template>
  <Header />
  <div>
    <div>
      <h2 class="text-center my-5 text-3xl font-bold text-red-900">update Restaurant</h2>
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
          v-on:click="updateRestaurant"
          class="border-2 border-red-700 p-2 block rounded bg-red-700 text-white uppercase font-bold"
        >
          Update Restaurant
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
import axios from "axios";
export default {
  name: "Update",
  components: {
    Header,
  },
  methods: {
    async updateRestaurant() {
      const result = await axios.put(
        "http://localhost:3000/restaurent/" + this.$route.params.id,
        {
          name: this.restaurant.name,
          address: this.restaurant.address,
          contact: this.restaurant.contact,
        }
      );
      if (result.status == 200) {
        this.$router.push({ name: "Home" });
      }
    },
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
  async mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "Signup" });
    }
    const result = await axios.get(
      "http://localhost:3000/restaurent/" + this.$route.params.id
    );
    console.warn(this.$route.params.id, result);
    this.restaurant = result.data;
  },
};
</script>

<style lang="scss" scoped></style>
