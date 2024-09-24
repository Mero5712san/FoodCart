import React, { useState } from 'react';
import '../../styles/cartliststyle.css';
import Listheading from '../../components/listheading/Listheading';

const Cartlist = ({ cartItems, increaseQuantity, decreaseQuantity, deleteItem }) => {
    // console.log(cartItems)
    return (
        <div className='cartlist'>
            <Listheading />
            <div className="listpage">
                {cartItems.length === 0 ? (
                    <div className="nolist">
                        <li className="icon">
                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 48 48" enable-background="new 0 0 48 48" xml:space="preserve">
                                <g id="color_17_">
                                    <g>
                                        <path fill="#898CC5" d="M45,17H16c-0.553,0-1,0.447-1,1l2,15c0,0.553,0.447,1,1,1h23c0.553,0,1-0.447,1-1l4-15
			                            C46,17.447,45.553,17,45,17z"></path>
                                    </g>
                                </g>
                                <g id="outline_16_">
                                    <g>
                                        <path fill="#384D68" d="M17,40c-1.656,0-3,1.343-3,3s1.344,3,3,3s3-1.343,3-3S18.656,40,17,40z M17,44c-0.553,0-1-0.447-1-1
			                            s0.447-1,1-1s1,0.447,1,1S17.553,44,17,44z M41.952,31.238l0.019,0.004l4-16l-0.019-0.004C45.972,15.16,46,15.084,46,15
			                            c0-0.553-0.447-1-1-1H11.629L9.989,2.854L9.971,2.857C9.899,2.376,9.502,2,9,2H3C2.447,2,2,2.447,2,3s0.447,1,1,1h5.137
			                            l4.874,33.146l0.019-0.003C13.101,37.624,13.498,38,14,38h28c0.553,0,1-0.447,1-1s-0.447-1-1-1H14.863l-0.588-4H41
			                            C41.468,32,41.843,31.672,41.952,31.238z M14,30c-0.006,0-0.012,0.004-0.018,0.004L11.922,16h31.797l-1,4H19c-0.553,0-1,0.447-1,1
			                            s0.447,1,1,1h23.219l-0.5,2H26c-0.553,0-1,0.447-1,1s0.447,1,1,1h15.219l-1,4H14z M38,40c-1.656,0-3,1.343-3,3s1.344,3,3,3
			                            s3-1.343,3-3S39.656,40,38,40z M38,44c-0.553,0-1-0.447-1-1s0.447-1,1-1s1,0.447,1,1S38.553,44,38,44z"></path>
                                    </g>
                                </g>
                            </svg>
                        </li>
                        <li className="message">Cart is empty</li>
                        <li className="description">Scan barcode or add from catalog</li>
                    </div>
                ) : (
                    <div className="list">
                        {cartItems.map((item, index) => (
                            <div className="listelement" key={index}>
                                <div className="elementname">
                                    <li>{item.name}</li>
                                    <li className='varies'>{item.quantity} {item.size} size</li>
                                </div>
                                <div className='counter'>
                                    <li className='minus' onClick={() => decreaseQuantity(index)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-minus"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                    </li>
                                    <li className='countvalue'>{item.quantity}</li>
                                    <li className='plus' onClick={() => increaseQuantity(index)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                    </li>
                                </div>
                                <div className="elementprice">
                                    <li>SAR {(item.unitPrice * item.quantity).toFixed(2)}</li>
                                </div>
                                <div className='del'>
                                    <li  onClick={() => deleteItem(index)}>
                                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 63 80.5" enable-background="new 0 0 63 80.5" xml:space="preserve">
                                            <g>
                                                <path fill="#4E4F50" d="M1.3,19.3L1.3,19.3L4.6,22v52.2c0,2.6,2.1,4.6,4.6,4.6h44.1c2.6,0,4.6-2.1,4.6-4.6V22l3.3-2.8h0v-4.6H1.3
		                                    V19.3z M41.8,26.5h5.6v44.9h-5.6V26.5z M28.5,26.5h5.6v44.9h-5.6V26.5z M15.2,26.5h5.6v44.9h-5.6V26.5z"></path>
                                                <path fill="#4E4F50" d="M60.3,8.1H40.8V3.5c0-1-0.8-1.9-1.9-1.9H23.7c-1,0-1.9,0.8-1.9,1.9v4.6H2.3c-0.6,0-1.1,0.5-1.1,1.1v3.6
		                                        h60.2V9.2C61.4,8.6,60.9,8.1,60.3,8.1z M37.3,7h-12V5.7c0-0.3,0.3-0.6,0.6-0.6h10.8c0.3,0,0.6,0.3,0.6,0.6V7z"></path>
                                            </g>
                                        </svg>
                                    </li>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cartlist;
