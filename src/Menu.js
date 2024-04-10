import './App.css';
import './Media.css';
import {menu} from "./Data";

import React from 'react'

function Menu() {
  return (
    <div>
        <section>
            <div className='container'>
            <div className='menu-container'>
                <h3><span>OUR </span>  MENU</h3>
               
                   <div className='menu'>
                    {
                        menu.map((e) => {
                            return(
                                <div className='menu-in'>
                                     <img src={e.img} alt="menu-1" />
                                     <h6>{e.decText}</h6>
                                     <p>{e.price}</p>
                                     <button>Add To Cart</button>
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

export default Menu