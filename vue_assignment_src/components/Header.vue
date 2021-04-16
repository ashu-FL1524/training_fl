<template>
    <div class ="menu">
        <div class = "m1" style="width:50% ; text-align:left ; margin:-10px">
           <div class="d-flex align-center">
               <h1> Vuetify </h1>
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="30"
          
        />
        
        <!-- <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="40"
        /> -->
      </div>
        <h1> Vuetify </h1>
        </div>
        <div class = "m1" style="width:50% ; margin:-10px ; text-align:right">
            <Sidemenu />
        </div>
        
    </div>
</template>

<script>
import Sidemenu from './Sidemenu';

export default {
  components: {
    Sidemenu,
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
