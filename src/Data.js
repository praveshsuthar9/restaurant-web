import cartImg1 from "./images/cart-item-1.png";
import cartImg2 from "./images/cart-item-2..png";
import cartImg3 from "./images/cart-item-3.png";
import cartImg4 from "./images/cart-item-4.png";

import menuImg1 from "./images/menu-1.png";
import menuImg2 from "./images/menu-2.png";
import menuImg3 from "./images/menu-3.png";
import menuImg4 from "./images/menu-4.png";
import menuImg5 from "./images/menu-5.png";
import menuImg6 from "./images/menu-6.png";

import productImg1 from "./images/product-img-1.png";
import productImg2 from "./images/product-img-2.png";

import reviewImg from "./images/review-img.png";

import blogImg1 from "./images/blog-1.jpeg";
import blogImg2 from "./images/blog-2.jpeg";
import blogImg3 from "./images/blog-3.jpeg";

const cart = [
  {
    img: cartImg1,
    item: "Cart Item 01",
    amount: "$15.99/-",
  },
  {
    img: cartImg2,
    item: "Cart Item 01",
    amount: "$19.99/-",
  },
  {
    img: cartImg3,
    item: "Cart Item 01",
    amount: "$25.99/-",
  },
  {
    img: cartImg4,
    item: "Cart Item 01",
    amount: "$20.99/-",
  },
];

const menu = [
  {
    img: menuImg1,
    decText: "Tasty And Healty",
    price: "$15.99",
  },

  {
    img: menuImg2,
    decText: "Tasty And Healty",
    price: "$20.99",
  },

  {
    img: menuImg3,
    decText: "Tasty And Healty",
    price: "$18.99",
  },

  {
    img: menuImg4,
    decText: "Tasty And Healty",
    price: "$19.99",
  },

  {
    img: menuImg5,
    decText: "Tasty And Healty",
    price: "$15.99",
  },
  {
    img: menuImg2,
    decText: "Tasty And Healty",
    price: "$15.99",
  },
  {
    img: menuImg1,
    decText: "Tasty And Healty",
    price: "$15.99",
  },

  {
    img: menuImg6,
    decText: "Tasty And Healty",
    price: "$24.99",
  },
];

const product = [
  {
    img: productImg1,
  },
  {
    img: productImg2,
  },
  {
    img: productImg1,
  },
];

const review = [{ img: reviewImg }, { img: reviewImg }, { img: reviewImg }];

const blog = [{ img: blogImg1 }, { img: blogImg2 }, { img: blogImg3 }];

export { cart, menu, product, review, blog };
