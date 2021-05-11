import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    cartItems: [],
    restuarants: [
      { 
        id:1,
        img: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
        name: 'Red Chillies',
        rating: '4.5',
        cusine: 'north-indian',
        items: [
          "Biryani",
          "chilli chicken",
          "Mutton biryani",
          "France",
          "Fish",
        ],
        price: ["200","220","250","200","220"],
        numberOfItems: [0,1,2,3,4],
        list: [0,0,0,0,0],
        AddtoCartId:"cart1"
      },
      { 
        id:2,
        img: "https://image.shutterstock.com/image-photo/friends-having-pasta-dinner-home-260nw-1206985765.jpg",
        name: 'cafe',
        rating: '4.5',
        cusine: 'north-indian',
        items: [
          "France fry",
          "Chicken soup",
          "veg biryani",
        ],
        price: ["200","220","250"],
        numberOfItems: [0,1,2],
        list: [0,0,0],
        AddtoCartId:"cart2"
      },
      { 
        id:3,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFdhnVn1PEbQyIW6TsLhaz9-x7ND-kEhSSwQ&usqp=CAU",
        name: 'onion restuarant',
        rating: '3.5',
        cusine: 'north-indian',
        items: [
          "Roti",
          "chapathi",
          "Cashew nut curry",
          "paneer butter masala",
          "Fish fry",
        ],
        price: ["200","220","250","200","220"],
        numberOfItems: [0,1,2,3,4],
        list: [0,0,0,0,0],
        AddtoCartId:"cart3"
      },
      { 
        id:4,
        img: "https://thumbor.thedailymeal.com/O5BS3X-3J3JKcsTKYdYd996xqsI=/870x565/https://www.thedailymeal.com/sites/default/files/slideshows/1943277/2108053/0.jpg",
        name: 'Green paradise',
        rating: '4.3',
        cusine: 'north-indian, Italic , chinese',
        items: [
          "Ulavacharu Biryani",
          "chicken 65",
          "Special chicken biryani",
          "special prawns fry",
          "Apollo fry",
        ],
        price: ["200","220","250","200","230"],
        numberOfItems: [0,1,2,3,4],
        list: [0,0,0,0,0],
        AddtoCartId:"cart4"
      },
      { 
        id:5,
        img: "https://img.theweek.in/content/dam/week/webworld/feature/lifestyle/2017/december/chicken-biriyani.jpg",
        name: 'Pai Viceroy',
        rating: '4.1',
        cusine: 'north-indian, chinese , italic',
        items: [
          "Naan", 
          "Butter Naan",
          "plain Naan",
          "chicken butter masala",
          "kadai chicken",
          "Natu kodi chicken",
          "Biryani's",
        ],
        price: ["35","45","40","220","250","200","220"],
        numberOfItems: [0,1,2,3,4,5,6],
        list: [0,0,0,0,0,0,0],
        AddtoCartId:"cart1"
      },
      // { 
      //   id:6,
      //   img: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
      //   name: 'cafe',
      //   rating: '4.5',
      //   cusine: 'north-indian',
      // },
      // { 
      //   id:7,
      //   img: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
      //   name: 'cafe',
      //   rating: '4.5',
      //   cusine: 'north-indian',
      // },
      // { 
      //   id:8,
      //   img: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
      //   name: 'cafe',
      //   rating: '4.5',
      //   cusine: 'north-indian',
      // },
      // { 
      //   id:9,
      //   img: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
      //   name: 'cafe',
      //   rating: '4.5',
      //   cusine: 'north-indian',
      // },
      // { 
      //   id:10,
      //   img: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
      //   name: '',
      //   rating: '4.5',
      //   cusine: 'north-indian',
      // },

    ],
    totalBill:[0],
    Discount:[0],
    totalQuantity:[0],
    finalAmount:[0],
    dAmount:[0],
    gst:[0],
  },
  mutations: {

  },
  actions: {
  },
  modules: {
  }
})
