import { Outlet, useLoaderData } from "react-router-dom";
import Navbar from "./Shared/Navbar/Navbar";
import Navbar2 from "./Shared/Navbar/Navbar2";
import Navbar3 from "./Shared/Navbar/Navbar3/Navbar3";
import Footer from "./Shared/Footer/Footer";
import Navbar4 from "./Shared/Navbar/Navbar4";
import MobileNavDown from "./Components/mobileNavDown/MobileNavDown";
import { createContext, useEffect, useState } from "react";
import {getStrdCart} from "./utilities/cartBD";


export const GroupsContext = createContext([]);
export const WebContext = createContext([]);
export const ItemContext = createContext([]);
export const CartContext = createContext();


const Root = () => {
  const {groups, webItems, items} = useLoaderData();
  const [cartItems, setCartItems] = useState(0);
    // console.log('groups:', groups);
  useEffect(() => {
    let cart = getStrdCart("cart");
    setCartItems(cart.length ? cart.length : 0);
    // console.log(cartItems);
  }, []);


  return (

    <CartContext.Provider value={{cartItems, setCartItems}}>
    <GroupsContext.Provider value={groups}>
      <WebContext.Provider value={webItems}>
        <ItemContext.Provider value={items}>


    <div className="" >
      <Navbar4/>
      <Navbar />
      <Navbar2 />
      <Navbar3 />
      <div className="md:ml-20">
        <Outlet  />
      </div>
      <div >
        <Footer />
       
      </div>
      

      <MobileNavDown className="fixed bottom-0 w-full z-10 bg-white md:hidden" />
   
    </div>


        </ItemContext.Provider>
          </WebContext.Provider>
        </GroupsContext.Provider>
      </CartContext.Provider>
  );
};

export default Root;
