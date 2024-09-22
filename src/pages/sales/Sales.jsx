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
  let getpagecond = (data)=>{
    console.log(data)
    setsecond(data)
  }
  return (
    <div className="sales">
      <div className="first">
      <Searchbar pagecond = {getpagecond}/>
      <Summary />
      <Cartlist />
      {second == "payment"?"":<Bottomprice />}
      </div>
      <div className="second">
        {/* {second ==  "payment" ? <Payment /> : <Menulist />} */}
        {second ==  "payment" ? <Payment /> : <Individual />}
      </div>
    </div>
  );
}

export default Sales;
