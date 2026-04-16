import React, { useContext } from "react";
import Layout from "../../Components/Layout/Layout";
import { DataContext } from "../../Components/DataProvider/DataContext";
import Product from "../../Components/PRODUCT/Product";
import ProductCard from "../../Components/PRODUCT/ProductCard";
import CurrentFormat from "../../Components/CurrentFormate/CurrentFormat";
import classes from "./cart.module.css";
import { Link } from "react-router-dom";
import { Type } from "../../Utility/action.type";
import { IoIosArrowDown,IoIosArrowUp } from "react-icons/io";

function Cart() {
  const [{ basket, user }, dispatch] = useContext(DataContext);

  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);
  console.log(basket);

  const increament = (item) => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item,
    });
  };
  const decreament = (id) => {
dispatch({
  type: Type.REMOVE_FROM_BASKET,
   id

})  };
  return (
    <Layout>
      <section className={classes.container}>
        <div className={classes.cart_container}>
          <h2>hello</h2>
          <h3>Your Shoping basket</h3>
          <hr />

          {basket?.length == 0 ? (
            <p>00ps No item in your cart</p>
          ) : (
            basket?.map((item, i) => {
              return (
                <section className={classes.cart_product}>
                  <div className={classes.carts_item}>
                    <ProductCard
                      key={i}
                      product={item}
                      renderDesc={true}
                      flux={true}
                      addButton={false}
                    />
                  </div>
                  <div className={classes.btn_container}>
                    <button className={classes.btn} onClick={() => increament(item)}><IoIosArrowUp size={25}/></button>
                    <span>{item.amount}</span>
                    <button className={classes.btn} onClick={() => decreament(item.id)}><IoIosArrowDown size={25}/></button>
                  </div>
                </section>
              );
            })
          )}
        </div>

        {basket?.length !== 0 && (
          <div className={classes.subtotal}>
            <div>
              <p>Subtotal ({basket?.length} items)</p>
              <CurrentFormat amount={total} />
            </div>
            <span>
              <input type="checkbox" />
              <small>this order contains a a gift</small>
            </span>
            <Link to="/payment">Continue checkout</Link>
          </div>
        )}
      </section>
    </Layout>
  );
}

export default Cart;
