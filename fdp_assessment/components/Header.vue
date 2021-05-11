<template>
    <div class ="menu">
        <div class = "m1" style="width:50% ; text-align:left ; margin:-10px">
           <div class="d-flex align-center">
        <v-img
          alt="Food Delivery App"
          class="shrink mr-2"
          contain
          src="https://theappideas.com/wp-content/uploads/2019/10/advantage-food-delivery-app.png"
          transition="scale-transition"
          width="70"
          
        />
        <h3 style="font-size:25px">Food Delivery App </h3>
        <div class = "menu1">
            <!-- <router-link to="/cart" class="btn btn-info btn-lg">
          <span class="glyphicon glyphicon-shopping-cart"></span> Shopping Cart
            </router-link> -->
            <router-link to="/cart" style="color: white;text-decoration: none"><v-icon class="white--text"> mdi-cart </v-icon> cart </router-link> |
            <router-link to="/Myaccount" style="color: white;text-decoration: none"><v-icon class="white--text"> mdi-account </v-icon> Myaccount </router-link> |
            <router-link to="/logout" style="color: white;text-decoration: none "><v-icon class="white--text"> mdi-logout </v-icon> Logout </router-link> 
        </div>
        <!-- <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="40"
        /> -->
      </div>
    </div> 
    </div>
</template>

<script>

export default {
  components: {
   
  },
};
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    h1{
        left:0;
        top:0;
        position:absolute;
    }
    .menu{
        background: #1abc9c;
        color: blueviolet;
        padding: 30px;
        width: 100%;
    }
    .menu1{
        padding: 10px;
        text-align: right;
        color: white;
        font-size: 20px;
        width:50%;
        position: absolute;
        right:-750px;
    }
    .m1{
        text-align: right;
        float: left;
        width: 50%;
        position: relative;
    }
    .v-img{
        position: relative;
       margin-left: 150px;
        margin-top: 0;
    }
</style>
