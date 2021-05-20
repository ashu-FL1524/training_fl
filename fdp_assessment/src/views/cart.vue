<template>
    <div>
            <div v-if="cartItems.length ==0">
                <h1 style="font-size=10vh">No Items In Cart</h1>
                <h3>Note*:- For order the food items click on home button</h3>
            </div>
            <div v-else>
                <div class="ml-5" v-for="(item,i) of cartItems" :key="i">
                    <v-card  class="my-10 float-left mr-5" min-width="350" min-height="150">
                        <template slot="progress">
                            <v-progress-linear
                                color="deep-purple"
                                height="10"
                                indeterminate
                            ></v-progress-linear>
                        </template>
                        <v-card-text>
                            <v-layout justify-center class="mb-6"><h2 class="black--text ">{{cartItems[i].restuarantName}}</h2></v-layout>
                            <v-row align="center" class="mx-0">
                                <div class="itemName">Item Name:</div>
                                <div class="black--text ml-2">{{cartItems[i].itemName}}</div>
                            </v-row><br><br>
                            <v-row align="center" class="mx-0">
                                <div class="itemPrice">Item Price:</div>
                                <div class="black--text ml-2 mr-16">{{cartItems[i].itemPrice}}</div>
                                <button @click="minus" class="ml-8 mr-2 black--text" :id=i>-</button>
                                <h5 class="black--text">{{cartItems[i].Quantity}}</h5>
                                <button @click="plus" class="ml-2 black--text" :id=i>+</button>
                            </v-row><br><br>
                            <v-row align="center" class="mx-0">
                                <div class="Quantity">Total Price:</div>
                                <div class="black--text ml-2">{{cartItems[i].totalPrice}}</div>
                            </v-row><br><br>
                        </v-card-text>
                        <v-layout justify-end class="mr-18 mt-n10 mb-3"><button @click="Delete" :id=i><v-icon class="red--text"> mdi-delete </v-icon> Remove </button></v-layout>
                    </v-card>
                </div>
                <div><router-link to="/checkout"><button @click="placeNow" class="ordernow" :id=i>Place Order </button></router-link></div>
            </div>
        </div>
</template>
<script>
export default{
    name: 'cart',
    data() {
        return {
            addition:0,
            subract:0,
            del:0
        }
    },
    computed:{
        cartItems(){
            return this.$store.state.cartItems;
        },
        totalBill(){
          return this.$store.state.totalBill;
        },
        Discount(){
            return this.$store.state.Discount;
        },
        totalQuantity(){
            return this.$store.state.totalQuantity;
        }
    },
    methods:{
        minus(event){
            this.subract=event.currentTarget.id;
            this.cartItems[this.subract].Quantity--;
            var a=parseInt(this.cartItems[this.subract].itemPrice.substring(0));
            this.cartItems[this.subract].totalPrice=this.cartItems[this.subract].Quantity*a;
        },
        plus(event){
            this.addition=event.currentTarget.id;
            this.cartItems[this.addition].Quantity++;
            var a=parseInt(this.cartItems[this.addition].itemPrice.substring(0));
            this.cartItems[this.addition].totalPrice=this.cartItems[this.addition].Quantity*a;
        },
        Delete(event){
            this.del=event.currentTarget.id;
            this.cartItems.splice(this.del,1);
            console.log(this.cartItems);
            
        },
        placeNow(){
            for(var i=0;i<this.cartItems.length;i++){
                this.totalBill[0] = this.totalBill[0]+this.cartItems[i].totalPrice;
                this.totalQuantity[0] = this.totalQuantity[0]+this.cartItems[i].Quantity;
            }
        },
    },
    updated(){
        this.cartItems[this.subtract].Quantity
        this.cartItems[this.addition].Quantity
        this.cartItems[this.addition].totalPrice
        this.cartItems
        this.Discount
    }
}
</script>
<style scoped>
h1{
    font-size: 8vh;
    text-align: center;
    padding-top: 200px;
}
h3{
    text-align: center;
}
.itemName{
    font-size:16px;
    font-weight:bold;
    color:black;
}
.itemPrice{
    font-size:16px;
    font-weight:bold;
    color:black;
}
.Quantity{
    font-size:16px;
    font-weight:bold;
    color:black;
}
/* button{
    border: 2px solid black;
    border-radius: 50%;
    padding: 0px 8px 0px 8px;
} */
#minus{
    margin-left:40px;
    margin-right:8px;
}
#add{
    margin-left: 8px;
}
.ordernow{
    border-radius: 5px;
    position: relative;
    margin: 0px 45%;
    margin-bottom: 20px;
    color: white;
    border:2px solid lightblue;
    background-color: rgb(42, 72, 204);
    padding: 15px 30px 15px 30px;
    font-weight: bold;
    font-size: 15px;
    }
</style>