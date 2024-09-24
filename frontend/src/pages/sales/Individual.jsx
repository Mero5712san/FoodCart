import React, { useState, useEffect } from 'react';
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
      unitPrice: price / quantity
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
          <li className='image'><img src={food.img} alt="!found" />
            <div className="ibutton">
              <li>
                <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M26 47.875C13.9188 47.875 4.125 38.0812 4.125 26C4.125 13.9188 13.9188 4.125 26 4.125C38.0812 4.125 47.875 13.9188 47.875 26C47.875 38.0812 38.0812 47.875 26 47.875ZM26 51C39.8071 51 51 39.8071 51 26C51 12.1929 39.8071 1 26 1C12.1929 1 1 12.1929 1 26C1 39.8071 12.1929 51 26 51Z" fill="white"></path>
                  <path d="M28.9084 21.5872L21.749 22.4844L21.4927 23.6746L22.9026 23.9309C23.8181 24.1506 24.0012 24.4802 23.7998 25.3958L21.4927 36.2356C20.8884 39.0371 21.8223 40.3555 24.0195 40.3555C25.7224 40.3555 27.7 39.5681 28.5972 38.4878L28.8718 37.1877C28.2493 37.7371 27.3337 37.9568 26.7295 37.9568C25.8689 37.9568 25.5576 37.3525 25.7773 36.2905L28.9084 21.5872Z" fill="white"></path>
                  <path d="M29.125 15.0625C29.125 16.7884 27.7259 18.1875 26 18.1875C24.2741 18.1875 22.875 16.7884 22.875 15.0625C22.875 13.3366 24.2741 11.9375 26 11.9375C27.7259 11.9375 29.125 13.3366 29.125 15.0625Z" fill="white"></path>
                  <path d="M28.9084 21.5872L29.3975 21.6913L29.5439 21.0036L28.8463 21.091L28.9084 21.5872ZM21.749 22.4844L21.6869 21.9883L21.3349 22.0324L21.2602 22.3791L21.749 22.4844ZM21.4927 23.6746L21.0039 23.5693L20.8952 24.0741L21.4032 24.1665L21.4927 23.6746ZM22.9026 23.9309L23.0193 23.4447L23.0057 23.4415L22.992 23.439L22.9026 23.9309ZM23.7998 25.3958L23.3115 25.2883L23.3108 25.2917L23.7998 25.3958ZM21.4927 36.2356L21.9814 36.341L21.9817 36.3397L21.4927 36.2356ZM28.5972 38.4878L28.9818 38.8072L29.0608 38.7121L29.0864 38.5911L28.5972 38.4878ZM28.8718 37.1877L29.361 37.2911L29.6731 35.8139L28.541 36.8128L28.8718 37.1877ZM25.7773 36.2905L25.2883 36.1864L25.2877 36.1892L25.7773 36.2905ZM47.375 26C47.375 37.8051 37.8051 47.375 26 47.375V48.375C38.3574 48.375 48.375 38.3574 48.375 26H47.375ZM26 4.625C37.8051 4.625 47.375 14.1949 47.375 26H48.375C48.375 13.6426 38.3574 3.625 26 3.625V4.625ZM4.625 26C4.625 14.1949 14.1949 4.625 26 4.625V3.625C13.6426 3.625 3.625 13.6426 3.625 26H4.625ZM26 47.375C14.1949 47.375 4.625 37.8051 4.625 26H3.625C3.625 38.3574 13.6426 48.375 26 48.375V47.375ZM50.5 26C50.5 39.531 39.531 50.5 26 50.5V51.5C40.0833 51.5 51.5 40.0833 51.5 26H50.5ZM26 1.5C39.531 1.5 50.5 12.469 50.5 26H51.5C51.5 11.9167 40.0833 0.5 26 0.5V1.5ZM1.5 26C1.5 12.469 12.469 1.5 26 1.5V0.5C11.9167 0.5 0.5 11.9167 0.5 26H1.5ZM26 50.5C12.469 50.5 1.5 39.531 1.5 26H0.5C0.5 40.0833 11.9167 51.5 26 51.5V50.5ZM28.8463 21.091L21.6869 21.9883L21.8112 22.9805L28.9706 22.0833L28.8463 21.091ZM21.2602 22.3791L21.0039 23.5693L21.9815 23.7798L22.2378 22.5897L21.2602 22.3791ZM21.4032 24.1665L22.8131 24.4228L22.992 23.439L21.5821 23.1826L21.4032 24.1665ZM22.7859 24.4171C23.2302 24.5237 23.3197 24.6237 23.3417 24.6603C23.3674 24.703 23.4107 24.8373 23.3115 25.2883L24.2881 25.5032C24.3903 25.0387 24.4428 24.5505 24.1984 24.1445C23.9504 23.7325 23.4905 23.5578 23.0193 23.4447L22.7859 24.4171ZM23.3108 25.2917L21.0036 36.1315L21.9817 36.3397L24.2889 25.4998L23.3108 25.2917ZM21.0039 36.1302C20.6922 37.5754 20.7449 38.7678 21.2837 39.6145C21.8431 40.4936 22.8274 40.8555 24.0195 40.8555V39.8555C23.0144 39.8555 22.4332 39.5582 22.1274 39.0777C21.801 38.5648 21.6889 37.6973 21.9814 36.341L21.0039 36.1302ZM24.0195 40.8555C24.9428 40.8555 25.9265 40.6432 26.7982 40.2902C27.6646 39.9393 28.4633 39.4316 28.9818 38.8072L28.2125 38.1683C27.8338 38.6243 27.1951 39.0505 26.4228 39.3633C25.6556 39.674 24.7991 39.8555 24.0195 39.8555V40.8555ZM29.0864 38.5911L29.361 37.2911L28.3826 37.0844L28.108 38.3844L29.0864 38.5911ZM28.541 36.8128C28.0342 37.26 27.2489 37.4568 26.7295 37.4568V38.4568C27.4186 38.4568 28.4644 38.2141 29.2026 37.5627L28.541 36.8128ZM26.7295 37.4568C26.4245 37.4568 26.3306 37.3604 26.2852 37.2788C26.2142 37.1512 26.166 36.8799 26.267 36.3918L25.2877 36.1892C25.169 36.7631 25.1665 37.325 25.4114 37.765C25.6818 38.2511 26.1739 38.4568 26.7295 38.4568V37.4568ZM26.2664 36.3947L29.3975 21.6913L28.4194 21.483L25.2883 36.1864L26.2664 36.3947ZM28.625 15.0625C28.625 16.5122 27.4497 17.6875 26 17.6875V18.6875C28.002 18.6875 29.625 17.0645 29.625 15.0625H28.625ZM26 17.6875C24.5503 17.6875 23.375 16.5122 23.375 15.0625H22.375C22.375 17.0645 23.998 18.6875 26 18.6875V17.6875ZM23.375 15.0625C23.375 13.6128 24.5503 12.4375 26 12.4375V11.4375C23.998 11.4375 22.375 13.0605 22.375 15.0625H23.375ZM26 12.4375C27.4497 12.4375 28.625 13.6128 28.625 15.0625H29.625C29.625 13.0605 28.002 11.4375 26 11.4375V12.4375Z" fill="white"></path>
                </svg>
              </li>
            </div>
            {food.varient > 0 ?<div className="varientbutton">
              <li>{food.varient}</li>
            </div> :""}
          </li>
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
              <li  className={selectedsize === "large" ? "listsizeactive" : "listsize"} ><input type="radio" name='size' onClick={() => handleSizeSelection("large")} checked={selectedsize === "large"}/>{food.name} (large)</li>
              <li className={selectedsize === "large" ? "amountactive" : "amount"}>SAR 800.00</li>
            </div>
            <div className="size">
              <li className={selectedsize === "medium" ? "listsizeactive" : "listsize"} ><input type="radio" name='size' onClick={() => handleSizeSelection("medium")} checked={selectedsize === "medium"} />{food.name} (medium)</li>
              <li className={selectedsize === "medium" ? "amountactive" : "amount"}>SAR 500.00</li>
            </div>
            <div className="size">
              <li  className={selectedsize === "small" ? "listsizeactive" : "listsize"} ><input type="radio" name='size' onClick={() => handleSizeSelection("small")} checked={selectedsize === "small"} />{food.name} (small)</li>
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
