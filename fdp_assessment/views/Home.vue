<template>
  <div>
    <Header />
  <div class="res container">
    
    <v-container class="d-flex row wrap">
      <v-card
        class="res"
        v-for="(restuarant, i) of restuarants"
        :key="i"
        max-width="400"
      >
        <template slot="progress">
          <v-progress-linear
            color="deep-purple"
            height="10"
            indeterminate
          ></v-progress-linear>
        </template>

        <v-img height="250" :src="restuarants[i].img"></v-img>

        <v-card-title>{{ restuarants[i].name }}</v-card-title>

        <v-card-text>
          <v-row align="center" class="mx-0">
            <v-rating
              :value="restuarants[i].rating"
              color="amber"
              dense
              half-increments
              readonly
              size="14"
            ></v-rating>

            <div class="grey--text ml-4">
              {{ restuarants[i].rating }}
            </div>
          </v-row>

          <div class="my-4 subtitle-1">
            {{ restuarants[i].cusine }}
          </div>
          
            <div class="text-center">
               <v-dialog v-model="dialog" width="1000" persistent :retain-focus="false"  :v-active.sync="dialog">
          <template v-slot:activator="{ on }">
            <v-btn @click="onClick" v-on="on" :id=restuarants[i].id :value=restuarants[i].id>
              Menu
            </v-btn>
          </template>
                
                <v-card>
                  <v-card-title class="headline grey lighten-2">
                    <h2>Menu</h2>
                    <v-layout justify-end><v-card-actions >
                <v-btn class="white black--text font-weight-bold" text @click="dialog_close()">Close</v-btn>
              </v-card-actions></v-layout>
                  </v-card-title>
                  
                  <v-card-text>
                    <v-layout justify-start class="ml-6 mt-5">
                      <h2 class="black--text text-decoration-underline">
                        Items List
                      </h2></v-layout
                    >
                    <v-layout justify-center class="mt-n5 ml-7">
                      <h2 class="black--text text-decoration-underline">
                        Price
                      </h2></v-layout>
                    <ul v-for="(item, j) of restuarants[targetId].items" :key="j">
                      <li>
                        {{ restuarants[targetId].items[j] }}
                        <v-layout justify-center class="mt-n4"><h4>{{ restuarants[targetId].price[j] }}</h4></v-layout>
                        <v-layout justify-end class="mt-n8">
                        <button @click="minus" :id=restuarants[targetId].numberOfItems[j] :class=restuarants[targetId].items[j]><h4>-</h4></button>
                        <button :class=restuarants[targetId].items[j]>{{restuarants[targetId].list[j]}}</button>
                        <button @click="add" :id=restuarants[targetId].numberOfItems[j] :class=restuarants[targetId].items[j]><h4>+</h4></button>
                        </v-layout>
                      </li>
                    </ul>
                  </v-card-text>
                  <v-divider></v-divider>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <router-link to="/cart"><v-btn color="primary" text @click="addToCart"  :id=restuarants[targetId].AddtoCartId>
                      Add To Cart
                    </v-btn></router-link>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </div>
          
        </v-card-text>

        <!-- <v-divider class="mx-4"></v-divider> -->
      </v-card>
    </v-container>
  </div>
  </div>
</template>
<script>
import Header from "../components/Header";

export default {
  components: {
    Header,
  },
  name: 'home',
    data() {
        return {
            dialog:false,
            targetId:0,
            subtract:0,
            Addition:0,
            cardId:0,
        }
    },
    updated() {
      this.restuarants[this.i].list[this.subtract];
      this.restuarants[this.targetId].list[this.Addition];
    },
  computed: {
    restuarants() {
      return this.$store.state.restuarants;
    },
    cartItems() {
      return this.$store.state.cartItems;
    },
  },
  methods: {
    onClick(event){
        this.targetId=event.currentTarget.id;
        console.log(this.targetId);
      },
    dialog_close(){
      this.dialog = false;
    },
     minus(event){
        this.subtract=event.currentTarget.id;
        this.restuarants[this.targetId].list[this.subtract]--;
      },
      add(event){
        this.Addition=event.currentTarget.id;
        this.restuarants[this.targetId].list[this.Addition]++;
    },
    addToCart(event){
        console.log("Hi this is cart");
        this.cardId=event.currentTarget.Id;
        for(var i=0;i<this.restuarants[this.targetId].list.length;i++){
          if(this.restuarants[this.targetId].list[i] == 0){
              continue;
          }
          else{
            var a=this.restuarants[this.targetId].items[i];
            var b=this.restuarants[this.targetId].price[i];
            var c=this.restuarants[this.targetId].list[i];
            var d=this.restuarants[this.targetId].name;
            // var e=this.count+1;
            var g=parseInt(b.substring(0));
            var f=g*c;
            var obj={
              restuarantName:d,
              itemName: a,
              itemPrice: b,
              Quantity: c,
              totalPrice:f,
            };
            this.cartItems.push(obj);
          }
        }
        console.log(this.addToCart);
      }
    },
};
</script>

<style>
.res {
  margin-right: 30px;
}
button{
  border:1px ;
  padding:0px 10px 0px 10px;
  text-align: end;
}
</style>