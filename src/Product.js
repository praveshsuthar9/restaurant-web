import "./App.css";
import './Media.css';
import React from 'react'
import {product} from './Data';


function Product() {
  return (
    <div>
        <section id="product">
<div className="container">
    <div className="product.container">
<h3>OUR <span>PRODUCT</span></h3>

<div className="product">
{
        product.map((e) => {
          return(
            <div className="product-in">
            <div className="p-icon">
              <span><i class="fa-solid fa-cart-shopping"></i></span>
              <span><i class="fa-solid fa-heart"></i></span>
              <span><i class="fa-solid fa-eye"></i></span>
        
            </div>
            <img src={e.img} alt="product-img" />
            <p>Fresh Food</p>
            <div className="p-star">
          <span><i class="fa-solid fa-star"></i></span>
          <span><i class="fa-solid fa-star"></i></span>
          <span><i class="fa-solid fa-star"></i></span>
          <span><i class="fa-solid fa-star"></i></span>
          <span><i class="fa-solid fa-star-half-stroke"></i></span>
        </div>
        <p>$15.99</p>
        </div>
          )
        })
        }
      
</div>

    </div>
</div>
        </section>
    </div>
  )
}

export default Product;