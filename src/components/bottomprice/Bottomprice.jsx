import React from 'react';
import '../../styles/bottompricestyle.css'
const Bottomprice = () => {
    return (
        <div className="bottomprice">
            <li className="count"><span className="bold">0</span> items
            <svg  id="Layer_1" version="1.0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><polyline fill="none" points="8.5,3 17.5,12 8.5,21 " stroke="#ffffff" stroke-miterlimit="10" stroke-width="2"></polyline></svg>
            </li>
            <li className="total">total SAR <span className="bold">0.00</span></li>
        </div>
    );
}

export default Bottomprice;
