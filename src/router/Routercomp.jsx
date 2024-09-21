import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menubar from '../components/menubar/Menubar';
import Sales from '../pages/sales/Sales';
import Dashboard from '../pages/dashboard/Dashboard';
import Order from '../pages/orders/Order';
import Customer from '../pages/customer/Customer';
import Items from '../pages/items/Items';
import Inventory from '../pages/inventory/Inventory';
import Alerts from '../pages/alerts/Alerts';
import '../styles/router.css'

const Routercomp = () => {
    return (
        <div className="route">
            <BrowserRouter>
                <div className='routemenu'><Menubar /></div>
                <div className='routercontent'>
                    <Routes>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/sales" element={<Sales />} />
                        <Route path="/orders" element={<Order />} />
                        <Route path="/customers" element={<Customer />} />
                        <Route path="/items" element={<Items />} />
                        <Route path="/inventory" element={<Inventory />} />
                        <Route path="/alerts" element={<Alerts />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>

    );
}

export default Routercomp;
