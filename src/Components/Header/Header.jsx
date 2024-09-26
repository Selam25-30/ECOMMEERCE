import React,{useContext} from 'react'
import classes from './Header.module.css'
import { Link } from 'react-router-dom';
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import LowerHeader from './LowerHeader';
import { DataContext } from "../DataProvider/DataProvider";

// import { DataProvider } from '../DataProvider/DataProvider';
import { BiCart } from "react-icons/bi";
import { auth } from "../../Utility/firebase";

function Header() {
    const [{ user,basket}, dispatch] = useContext(DataContext);
    console.log(basket.length);
    const totalItem = basket?.reduce((amount, item) => {
      return item.amount  + amount;
    }, 0);
  return (
      <>
        <section className={classes.fixed}>
            <div className={classes.header_container}>
                {/*logo section*/}
                <div className={classes.logo_container}>
                    
                <Link to="/">
                <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" />
                </Link>
                
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
            </div>
            <div className={classes.search}>
                {/*search*/ }
                
                <select name=""id="">
                    <option value="">All</option>
                </select>
                <input type="text" name="" id="" placeholder='search product' />
                
                <BsSearch size={38} />
                {/*icon */}
            </div>

            {/* right side link */}
            <div className={classes.order_container}>
                <Link to="" className={classes.language}>
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png" alt="" />

                
                <select name="" id="">
                    <option value="">EN</option>
                </select>
                </Link>

            {/* three components */}
            
            
                {/* <Link to="/auth">
                    <div>
                        <p>Hello, Sign in</p>
                        <span>Account & Lists</span>
                    </div>
                </Link> */}
                <Link to={!user && "/auth"}>
              <div>
                {user ? (
                  <>
                    <p>Hello {user?.email?.split("@")[0]}</p>
                    <span onClick={() => auth.signOut()}>
                      Sign Out
                    </span>
                  </>
                ) : (
                  <>
                    <p>Hello, Sign In</p>
                    <span>Account & Lists</span>
                  </>
                )}
              </div>
            </Link>

                <Link to='/orders'>
                    <p>returns</p>
                    <span>& Orders</span>
                </Link>

                
                
                {/*cart */}
                <Link to="/cart" className={classes.cart}>
                {/*icon */}
                <BiCart size={40} />
                <span>{totalItem}</span>
                
                </Link>
                </div>
            
            </div>
        
        <LowerHeader />
        </section>
      </>
      
    
  )
}

export default Header
