<template>
    <div>
        <h1 align = "center" style="margin-top:20px; margin-bottom:20px"> Registered Users </h1>
        <div v-if="useData.length==0">No Data</div>
        <div v-else>
            <v-simple-table
                fixed-header
                height="300px"
                class="table">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
           <b>Name</b>
          </th>
          <th class="text-left">
            <b>Email</b>
          </th>
          <th class="text-left">
           <b>Mobile Number</b>
          </th>
          <th class="text-left">
           <b>DOB</b>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(data,i) of useData" :key="i">
          <td align ="center">{{ data.name }}</td>
          <td align ="center">{{ data.email }}</td>
          <td align ="center">{{ data.mobileno }}</td>
          <td align ="center">{{ data.dob }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
    </div>
        
    </div>
</template>

<script>

export default {
    name: 'form',
    computed: {
        useData() {
            return this.$store.state.users;
        }
    },
};
</script>
<style scoped>
    b {
        font-size: 25px;
        font-family: 'Times New Roman', Times, serif;
    }
</style>
