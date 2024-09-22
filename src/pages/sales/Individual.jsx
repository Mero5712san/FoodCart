import React, { useState,useEffect } from 'react';
import '../../styles/individual.css'

const Individual = ({ food, foodselectedcond, addToCart }) => {
  let [selectedsize, setselectedsize] = useState("large")
  let [toggle, settoggle] = useState("varients")
  let [foodselected, setfoodselected] = useState(false)
  let [quantity, setQuantity] = useState(1)
  let [price, setPrice] = useState(0)
  const [isDisabled, setIsDisabled] = useState(false)
  const [inputValue, setInputValue] = useState("")

  const sizePrices = {
    large: 800.00,
    medium: 500.00,
    small: 300.00
  };

  let sendcondition = () => {
    setfoodselected(!foodselected);
    foodselectedcond(foodselected);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleSizeSelection = (size) => {
    setselectedsize(size);
    setPrice(sizePrices[size] * quantity);
    setIsDisabled(false);
  };

  React.useEffect(() => {
    if (selectedsize) {
      setPrice(sizePrices[selectedsize] * quantity);
    }
  }, [quantity, selectedsize]);

  const handleAddToCart = () => {
    if (isDisabled) return;
    const cartItem = {
      name: food.name,
      size: selectedsize,
      quantity,
      price,
      unitPrice : price/quantity
    };
    addToCart(cartItem);
    setIsDisabled(true)
    // console.log("cartlist ===> ",cartItem)
  };

  useEffect(() => {
    if (isDisabled) {
      setIsDisabled(false); 
    }
  }, [quantity]);

  // console.log(price)
  return (
    <div className="individual">
      <div>
        <div className="topbar">
          <li className="bold">varients & add-ons</li>
          <li onClick={sendcondition}>
            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10,10,0,0,1,12,22Z"></path>
              <polygon points="8.48 7.08 13.4 12 8.48 16.92 9.89 18.33 16.23 12 9.89 5.67 8.48 7.08"></polygon>
            </svg>
          </li>
        </div>

        <div className="food">
          <li><img src={food.img} alt="!found" /></li>
          <li className='name'>{food.name}</li>
        </div>

        <div className='slidebar'>
          <li className={toggle === "varients" ? "active" : "inactive"} onClick={() => { settoggle("varients") }}>varients</li>
          <li className={toggle === "addons" ? "active" : "inactive"} onClick={() => { settoggle("addons") }}>add-ons</li>
        </div>

        {toggle === "varients" ?
          <div className="quantity">
            <h2>quantity</h2>
            <div className="size">
              <li><input type="radio" name='size' onClick={() => handleSizeSelection("large")} checked={selectedsize === "large"} />{food.name} (large)</li>
              <li className={selectedsize === "large" ? "amountactive" : "amount"}>SAR 800.00</li>
            </div>
            <div className="size">
              <li><input type="radio" name='size' onClick={() => handleSizeSelection("medium")} checked={selectedsize === "medium"} />{food.name} (medium)</li>
              <li className={selectedsize === "medium" ? "amountactive" : "amount"}>SAR 500.00</li>
            </div>
            <div className="size">
              <li><input type="radio" name='size' onClick={() => handleSizeSelection("small")} checked={selectedsize === "small"} />{food.name} (small)</li>
              <li className={selectedsize === "small" ? "amountactive" : "amount"}>SAR 300.00</li>
            </div>
          </div> :
          <div className="add-ons">
            <h2>Add-ons</h2>
            <li><input type="checkbox" />cheese</li>
            <li><input type="checkbox" />Ketchup</li>
            <li><input type="checkbox" />favours</li>
          </div>
        }
      </div>

      <div className="counteditors">
        <div className="counts">
          <li>item total</li>
          <li className="amount">SAR {price.toFixed(2)}</li>
        </div>
        <div className="countbtn">
          <div className="btn">
            <li onClick={decreaseQuantity}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-minus">
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </li>
            <li>{quantity}</li>
            <li onClick={increaseQuantity}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </li>
          </div>
          <div className="orderbtn" onClick={handleAddToCart} disabled={isDisabled} style={{ opacity: isDisabled ? 0.5 : 1, pointerEvents: isDisabled ? 'none' : 'auto' }}>
            <li>add to order</li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Individual;
