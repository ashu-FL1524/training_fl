<template>
  <div class="home">
    <h1 align="center" style="margin-top:30px; margin-bottom:30px">USER DATA</h1>
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div >
      <!-- <h1> {{obj.name}} </h1> -->
      <v-simple-table
                fixed-header
                class="table">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
           <b>ID</b>
          </th>
          <th class="text-left">
           <b>UserName</b>
          </th>
          <th class="text-left">
           <b>Name</b>
          </th>
          <th class="text-left">
            <b>Email</b>
          </th>
          <th class="text-left">
           <b>Phone</b>
          </th>
          <th class="text-left">
           <b>City</b>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for = "(obj , index) of sample" :key = "index">
          <td align ="center">{{ obj.id }}</td>
          <td align ="center">{{ obj.username }}</td>
          <td align ="center">{{ obj.name }}</td>
          <td align ="center">{{ obj.email }}</td>
          <td align ="center">{{ obj.phone }}</td>
          <td align ="center">{{ obj.address.city }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Home',
  components: {

  },
  data() {
    return {
      sample: [],
    };
  },
  mounted() {
    console.log(this.$store.state.data);
    this.sample = this.$store.state.data;
    this.getData();
  },
  methods: {
    async getData(){
            this.loading=true;
            try {
                const response=await axios.get('https://jsonplaceholder.typicode.com/users');
                this.todos=response.data;
                this.$store.state.data = response.data;
                this.loading=false;
                console.log(this.todos)
            } catch (error) {
                console.log("error");
                this.loading=false;
            }
        }
  }
}
</script>

<style scoped>
    b{
        font-size: 25px;
        font-family: 'Times New Roman', Times, serif;
    }
</style>
