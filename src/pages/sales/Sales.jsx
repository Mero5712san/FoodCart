import React, { useState } from 'react';
import Summary from '../../components/summary/Summary';
import Searchbar from '../../components/searchbar/Searchbar';
import '../../styles/sales.css'
import Cartlist from './Cartlist';
import Payment from './Payment';
import Menulist from './Menulist';
import Bottomprice from '../../components/bottomprice/Bottomprice';
import Individual from './Individual';

const Sales = () => {
  let [second, setsecond] = useState("payment")
  let [selectedfood, setselectedfood] = useState("")
  let [isfoodselected, setisfoodselected] = useState(false)
  let [cartItems, setCartItems] = useState([])

  let getpagecond = (data) => {
    // console.log(data)
    setsecond(data)
  }
  let getfoodcondition = (condition) => {
    // console.log(condition)
    setisfoodselected(condition ? "payment" : "")
  }
  let handlefoodselected = (cond) => {
    setisfoodselected(cond)
  }
  let handleselectedfood = (food) => {
    setselectedfood(food)
  }
  // console.log(isfoodselected)
  // console.log(cartItems)

  const addToCart = (food) => {
    const existingItem = cartItems.find(
      (item) => item.name === food.name && item.size === food.size
    );
    
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.name === food.name && item.size === food.size
          ? { ...item, quantity: item.quantity + food.quantity}
          : item
      ));
    } else {
      setCartItems([...cartItems, { ...food}]);
    }
  };

  const increaseQuantity = (index) => {
    setCartItems(cartItems.map((item, i) =>
      i === index ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decreaseQuantity = (index) => {
    setCartItems(cartItems.map((item, i) =>
      i === index && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  const deleteItem = (index) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

  const calculateGrandTotal = () => {
    return cartItems.reduce((total, item) => total + (item.unitPrice * item.quantity), 0);
  };

  const countofitems = () =>{
    return cartItems.reduce((count, item)=>count + (item.quantity), 0)
  }

  // console.log(calculateGrandTotal())
  // console.log(cartItems)
  return (
    <div className="sales">
      <div className="first">
        <div>
          <Searchbar pagecond={getpagecond}/>
          <Summary />
          <Cartlist cartItems={cartItems} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} deleteItem={deleteItem} />
        </div>
        <div>
          {second == "payment" ? "" : <Bottomprice grandTotal={calculateGrandTotal()}  count = {countofitems()}/>}
        </div>
      </div>
      <div className="second">
        {!isfoodselected ?
          <div> {second == "payment" ? <Payment subtotal ={calculateGrandTotal()} /> : <Menulist onSelectFood={handleselectedfood} foodselected={handlefoodselected} pagecond={getpagecond} />}</div> :
          <div>{second == "payment" ? <Payment subtotal ={calculateGrandTotal()} /> : <Individual food={selectedfood} foodselectedcond={getfoodcondition} addToCart={addToCart} />}</div>}
      </div>
    </div>
  );
}

export default Sales;
