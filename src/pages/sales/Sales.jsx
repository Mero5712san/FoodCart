import React from 'react';
import Summary from '../../components/summary/Summary';
import Searchbar from '../../components/searchbar/Searchbar';
import '../../styles/sales.css'
import Cartlist from './Cartlist';
import Payment from './Payment';
import Menulist from './Menulist';

const Sales = () => {
  return (
    <div className="sales">
      <div className="first">
      <Searchbar />
      <Summary />
      <Cartlist />
      </div>
      <div className="second">
        {/* <Payment /> */}
        <Menulist />
      </div>
    </div>
  );
}

export default Sales;
