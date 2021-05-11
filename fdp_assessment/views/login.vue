<template>
<div>
    <h1 style="margin-top:30px; margin-bottom:30px">Login page</h1>
    <div class="container">
      <v-form action=" " v-model="isActive">
        <!-- <div class="row">
          <div class="col-25">
            <label for="Name"> UserName</label>
          </div>
          <div class="col-75">
            <input type="text" id="Name" name="Name"  />
          </div>
        </div> -->
        <div class="row">
          <div class="col-25">
            <label for="email">Email Id</label>
          </div>
          <div class="col-75">
            <input type="text" id="email" name="email"  required/>
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label for="password">Password</label>
          </div>
          <div class="col-75">
            <input type="password" id="password" name="password" required >
          </div>
        </div>
        <br/><br/>
        <div align="center">
          <router-link to = "/Register"><v-btn
            style="background-color: blue; color: white; margin:15px">Register</v-btn> </router-link>
          <div><router-link to="/Home"><v-btn style="background-color: blue; color: white" > Login </v-btn></router-link></div>
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
      email: "",
      password: "",
       isActive: true,
    };
  },
     updated() {
    if (
      this.email != "" &&
      this.password != ""
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
    onLogIn(){
      var a=document.getElementById("email").value;
      var b=document.getElementById("password").value;
      var c=0;
      for(var i=0;i<this.getData.length;i++){
        if(a==this.getData[i].email && b==this.getData[i].PWD){
          c++;
        }
      }
      if(c!=0){
        this.$router.push({ name: 'Home' });
      }
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

input[type="text"],input[type="password"],
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

input[type="login"] {
  background-color: $header-color;
  color: $header-color;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
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