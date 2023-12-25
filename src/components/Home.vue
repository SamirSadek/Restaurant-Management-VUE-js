<template>
  <Header />
  <div class="mt-5">
    <h2>Hi {{ name }}, Welcome on home Page</h2>
    <table border="1">
      <tr>
        <th class="border px-4 py-2">ID</th>
        <th class="border px-4 py-2">Name</th>
        <th class="border px-4 py-2">Contact</th>
        <th class="border px-4 py-2">Address</th>
        <th class="border px-4 py-2">Action</th>
      </tr>
      <tr v-for="item in restaurant" :key="item.id">
        <td class="border px-4 py-2">{{ item.id }}</td>
        <td class="border px-4 py-2">{{ item.name }}</td>
        <td class="border px-4 py-2">{{ item.contact }}</td>
        <td class="border px-4 py-2">{{ item.address }}</td>
        <td class="border px-4 py-2">
          <router-link :to="'/update/' + item.id"
            ><button class="text-green-800 bg-red-300 hover:text-green-400 p-1 rounded">
              Update
            </button></router-link
          ><button
            v-on:click="deleteRes(item.id)"
            class="text-red-800 bg-red-300 hover:text-green-400 ml-2 p-1 rounded"
          >
            Delete
          </button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import Header from "./Header.vue";
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      name: "",
      restaurant: [],
    };
  },
  components: {
    Header,
  },
  methods: {
    async deleteRes(id) {
      let result = await axios.delete("http://localhost:3000/restaurent/" + id);
      if (result.status == 200) {
        this.loadData();
      }
    },
    async loadData() {
      let user = localStorage.getItem("user-info");
      this.name = JSON.parse(user).name;
      if (!user) {
        this.$router.push({ name: "Signup" });
      }
      let result = await axios.get("http://localhost:3000/restaurent");
      console.warn(result);
      this.restaurant = result.data;
    },
  },
  async mounted() {
    this.loadData();
  },
};
</script>
