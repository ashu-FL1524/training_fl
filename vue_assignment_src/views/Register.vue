<template>
  <div>
    <h1 style="margin-top:30px; margin-bottom:30px">Registration page</h1>
    <div class="container">
      <v-form action=" " v-model="isActive">
        <div class="row">
          <div class="col-25">
            <label for="Name"> Name</label>
          </div>
          <div class="col-75">
            <input type="text" id="Name" name="Name" v-model="Name" />
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label for="email">Email</label>
          </div>
          <div class="col-75">
            <input type="text" id="email" name="email" v-model="email" />
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label for="MobileNo">Mobile No.</label>
          </div>
          <div class="col-75">
            <input
              type="number"
              id="MobileNo"
              name="MobileNo"
              v-model="MobileNo"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label for="DOB">Date of Birth</label>
          </div>
          <div class="col-75">
            <input type="date" id="DOB" name="DOB" v-model="DOB" />
          </div>
        </div>
        <br /><br />
        <div align="center">
          <router-link to = "/userdetails"><v-btn
            v-bind:disabled="isActive" @click="user"
            tile outlined
            style="background-color: blue; color: white">Register</v-btn> </router-link>
        </div>
        <br />
      </v-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      Name: "",
      email: "",
      DOB: "",
      MobileNo: "",
      isActive: true,
    };
  },
  updated() {
    if (
      this.Name != "" &&
      this.email != "" &&
      this.MobileNo != "" &&
      this.email.includes("@") &&
      this.email.includes(".com") &&
      this.MobileNo.length == 10 &&
      this.DOB != ""
    ) {
      this.isActive = false;
    }
  },
  computed: {
    getData() {
      return this.$store.state.users;
    }
  },
  methods: {
    user() {
      var object = { 
        name: this.Name,
        email: this.email,
        mobileno: this.MobileNo,
        dob: this.DOB,
      }
      this.getData.push(object);
      alert(this.Name + "  Registered")
    }
  }
};
</script>

<style lang = "scss" scoped>
$header-color: rgba(49, 20, 216, 0.979);
h1 {
  color: $header-color;
  font-style: bold;
  text-align: center;
}

input[type="text"],
input[type="number"],
input[type="date"], select,
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
}

label {
  padding: 12px 12px 12px 0;
  display: inline-block;
}

input[type="register"] {
  background-color: $header-color;
  color: $header-color;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type="register"]:hover {
  background-color: #45a049;
}

.container {
  margin-left: 160px;
  margin-right: 160px;
  border-style: solid;
  border-color: grey;
  border-radius: 5px;
  padding: 20px;
}

.col-25 {
  float: left;
  width: 25%;
  margin-top: 6px;
}

.col-75 {
  float: left;
  width: 70%;
  margin-top: 6px;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

body {
  background-image: url("https://media0.giphy.com/media/kg19fN5BXbZGIDznzG/giphy.gif");
  background-size: cover;
  height: 100vh;
  padding: 0;
}

@media screen and (max-width: 600px) {
  .col-25,
  .col-75,
  .checkbox-container{
    width: 100%;
    margin-top: 0;
  }
  .container {
    border: none;
    margin-left: 0px;
    margin-right: 0px;
  }
}
</style>