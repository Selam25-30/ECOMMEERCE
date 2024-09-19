import React from 'react'
import classes from './Header.module.css'
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import LowerHeader from './LowerHeader';
import { BiCart } from "react-icons/bi";

function Header() {
  return (
      <>
        <section>
            <div className={classes.header_container}>
                {/*logo section*/}
                <div className={classes.logo_container}>
                    
                <a href="#">
                <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" />
                </a>
                </div>
                {/*delivery*/}
               <div className={classes.delivery}>
                <span>
                <SlLocationPin />
                </span>
                <div>
                    <p>Delivered to </p>
                    <span>Ethiopia</span>
                </div>
            </div>
            
            <div className={classes.search}>
                {/*search*/ }
                
                <select name=""id="">
                    <option value="">All</option>
                </select>
                <input type="text" name="" id="" placeholder='search product' />
                
                <BsSearch />
                {/*icon */}
            </div>

            {/* right side link */}
            <div className={classes.order_container}>
                <a href="" className={classes.language}>
                <img src="data:image/jpeg;base64,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" alt="" />

                
                <section name="" id="">
                    <option value="">EN</option>
                </section>
                </a>

            {/* three components */}
            <a href='' >
                    <p>Sign In</p>
            <span>Account & Lists</span>

                </a>

                <a href=''>
                    <p>returns</p>
                    <span>& Orders</span>
                </a>

                
                </div>
                {/*cart */}
                <a href="" className={classes.cart}>
                {/*icon */}
                <BiCart size={35} />
                
                <span>0</span>
                </a>
            
            
            </div>
        </section>
        <LowerHeader />
      </>
      
    
  )
}

export default Header
