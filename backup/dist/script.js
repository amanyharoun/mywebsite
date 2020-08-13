Vue.component('book', {
  props: ["book", "saleRate"],
  data() {},
  computed: {
    salePrice() {
      return this.book.price - (this.saleRate * this.book.price);
    }
  },
  template: `
    <div class="book">
      <div>{{ book.name }}</div>
      <hr>
      <p>Reg Price: $ {{ book.price }}</p>
      <p>Now on sale for<br>$ {{ salePrice }}!</p>
<div class="cart">
<button v-on:click="">Add to cart</button>
</div>
  `
});

var app = new Vue({
  el: "#app",
  data: {
    title: "Library Database",
    marketSale: 0.25, 
    bookNum: 0,
    Cart: 0,
     books: [
      {
        name: "The Taming of the Shrew",
        author: "A",
        price: 25,
        cart: "add to cart",
        inStock: false
      },{
        name: "Henry IIIV",
        author: "B",
        price: 15,
        inStock: true
      },{
        name: "A MidSummer Night's Dream",
        author: "C",
        price: 5,
        inStock: true
      },{
        name: "Hamlet",
        author: "D",
        price: 10,
        inStock: true
      },{
        name: "All's Well That Ends Well",
        author: "E",
        price: 100,
        inStock: true
      }, {
        name: "The Comedy of Errors",
        auther: "F",
        price: 200,
        inStock: true
      }, {
        name: "Much Ado About Nothing",
        auther: "G",
        price: 50,
        inStock: true
      }, {
        name: "The Sonnets",
        author: "H",
        price: 60,
        inStock: true
      }, {
        name: "The Merry Wives of Windsor",
        author: "I",
        price: 70,
        inStock: true
      },
       
    ]
  }

});