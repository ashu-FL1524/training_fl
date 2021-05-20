<template>
    <div v-if="cartItems.length==0">
            <h1 style="font-size:10vh;text-align:center;margin-top:200px">No Items to Bill</h1>
            <h3 style="text-align:center">Note*:- For order the food items click on home button</h3>
    </div>
    <div v-else>
        <v-card
    class="mx-auto my-12"
    max-width="800" min-height="100"
  >
    <template slot="progress">
      <v-progress-linear
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-card-title><h1>Total Bill</h1></v-card-title>
    
    <v-card-text>
        <v-layout justify-center>
            <table>
            <thead>
                <th>S.No</th>
                <th>ItemName</th>
                <th>ItemPrice</th>
                <th>Quantity</th>
                <th>ItemPrice*Quantity</th>
                <th>Amount</th>
            </thead>
            <tbody >
                <tr v-for="(item,i) in cartItems" :key="i">
                    <td>{{i+1}}</td>
                    <td>{{cartItems[i].itemName}}</td>
                    <td>{{cartItems[i].itemPrice}}</td>
                    <td>{{cartItems[i].Quantity}}</td>
                    <td>{{cartItems[i].itemPrice}}*{{cartItems[i].Quantity}}</td>
                    <td>{{cartItems[i].totalPrice}}</td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td style="font-weight:bold">Total Amount:</td>
                    <td style="font-weight:bold">{{totalBill[0]}}</td>
                </tr>
            </tbody>
        </table>
        </v-layout><br/>
        <div style="text-align: right">
        <h3>Total Amount: ₹{{totalBill[0]}}/-</h3>
        <h3>Discount({{Discount[0]}}%): -{{dAmount[0]}}</h3>
        <h3>GST(5%): {{gst[0]}}</h3><br>
        </div>
        <h1 style="text-align: center">Final Amount: ₹{{finalAmount[0]}}/-</h1>
        
    </v-card-text>
  </v-card>
  <v-layout justify-end style="margin-right:400px;"><router-link to="/orderplaced" class="text-decoration-none"><v-btn style="color:white;background:green">CheckOut</v-btn></router-link></v-layout>
    </div>
</template>
<script>
export default{
    name:'bill',
    data() {
        return {
        }
    },
    beforeMount(){
        if(this.totalQuantity<5){
            this.Discount[0] = 5;
            this.dAmount[0] = this.totalBill[0] * (0.05);
        }
        else if(this.totalQuantity>=5 && this.totalQuantity<=10){
            this.Discount[0] = 10;
            this.dAmount[0] = this.totalBill[0] * (0.1);
        }
        else{
            this.Discount[0] = 15;
            this.dAmount[0] = this.totalBill[0] * (0.15);
        }
        this.gst[0]=this.totalBill[0] * (0.05);
        this.finalAmount[0]=this.totalBill[0]-this.dAmount[0]+this.gst[0]
    },
    computed:{
        totalBill(){
            return this.$store.state.totalBill;
        },
        cartItems(){
            return this.$store.state.cartItems;
        },
        totalQuantity(){
            return this.$store.state.totalQuantity;
        },
        Discount(){
            return this.$store.state.Discount;
        },
        finalAmount(){
            return this.$store.state.finalAmount;
        },
        dAmount(){
            return this.$store.state.dAmount;
        },
        gst(){
            return this.$store.state.gst;
        }
    },
}
</script>
<style scoped>
th{
    color: black;
    font-size: 20px;
    padding: 10px;
}
td{
    color: black;
    text-align: center;
    padding:5px;
}
h2{
    color: black;
    margin-right: 35px;
    margin-top: 50px;
}
</style>