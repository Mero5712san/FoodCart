import React, { useEffect, useState } from 'react';
import '../../styles/payment.css'
import Finalizebar from '../../components/finalizebar/Finalizebar';
const Payment = ({subtotal }) => {
    const [grandTotal, setGrandTotal] = useState(0);
    const taxPercentage = 10; 

    const calculateGrandTotal = () => {
      const taxAmount = (subtotal * taxPercentage) / 100;
      const total = subtotal + taxAmount;
      setGrandTotal(total.toFixed(2)); 
    };
  
    useEffect(() => {
      calculateGrandTotal();
    }, [subtotal]);

    return (
        <div className="payment">
            <div className="bill">
                <div className="elements">
                    <li className="heading">payment summary</li>
                    <li className='profileinfo'>
                        <span className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1706.66 1706.66" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xodm="http://www.corel.com/coreldraw/odm/2003">
                                <g id="Layer_x0020_1">
                                    <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                                    <path class="fil0" d="M1533.78 1706.65l-1360.92 0c-51.58,0 -93.55,-41.97 -93.55,-93.57l0 -781.62c0,-51.59 41.97,-93.56 93.55,-93.56l257.48 0c26.33,0 26.33,40 0,40l-257.48 0c-29.53,0 -53.55,24.03 -53.55,53.56l0 781.62c0,29.54 24.02,53.56 53.55,53.56l1360.92 0c29.54,0 53.56,-24.02 53.56,-53.56l0 -781.62c0,-29.53 -24.02,-53.56 -53.55,-53.56l-257.48 0c-26.33,0 -26.32,-40 0,-40l257.47 0c51.59,0 93.57,41.96 93.57,93.56l0 781.62c0,51.59 -41.97,93.57 -93.57,93.57z"></path>
                                    <path class="fil0" d="M1276.31 982.54c-11.04,0 -20,-8.97 -20,-20l0 -922.53 -805.96 0 0 922.52c0,26.33 -40,26.32 -40,0l0 -942.52c0,-11.04 8.96,-20 20,-20l845.96 0c11.04,0 20,8.96 20,20l0 942.52c0.01,11.04 -8.96,20.01 -20,20.01z"></path>
                                    <path class="fil0" d="M269.54 777.93c-12.21,0 -21.69,-11.02 -19.79,-23.11l58.84 -374.69c1.53,-9.72 9.9,-16.89 19.75,-16.89l101.98 -0c26.33,0 26.33,40 0,40l-84.89 0 -56.19 357.79c-1.53,9.86 -10.03,16.89 -19.71,16.91z"></path>
                                    <path class="fil0" d="M1370.63 982.54l-1034.61 0c-26.33,0 -26.33,-40 0,-40l1034.61 0c26.32,0 26.32,40 0,40z"></path>
                                    <path class="fil0" d="M1213.09 1706.65c-11.04,0 -20,-8.97 -20,-20l0 -243.68c0,-38.41 -31.23,-69.65 -69.65,-69.65l-540.23 0c-38.4,0 -69.65,31.23 -69.65,69.65l0 243.68c0,26.33 -40,26.32 -40,0l0 -243.68c0,-60.47 49.2,-109.67 109.65,-109.67l540.23 0c60.47,0 109.67,49.2 109.67,109.67l0 243.68c0,11.04 -8.98,20 -20.02,20z"></path>
                                    <path class="fil0" d="M1437.11 777.93c-9.67,0 -18.19,-7.04 -19.74,-16.9l-56.19 -357.79 -84.87 -0c-26.33,0 -26.32,-40 0,-40l101.98 0c9.85,0 18.24,7.17 19.76,16.89l58.85 374.69c1.89,12.09 -7.6,23.12 -19.79,23.12z"></path>
                                    <path class="fil0" d="M1076.31 299.83l-445.97 0c-26.33,0 -26.33,-40 0,-40l445.97 0c26.33,0 26.33,40 0,40z"></path>
                                    <path class="fil0" d="M1076.31 511.27l-445.97 0c-26.33,0 -26.33,-40 0,-40l445.97 0c26.33,0 26.33,40 0,40z"></path>
                                    <path class="fil0" d="M1076.31 722.71l-445.97 0c-26.33,0 -26.33,-40 0,-40l445.97 0c26.33,0 26.33,40 0,40z"></path>
                                    <path class="fil0" d="M1443.16 1182.63c-28.13,0 -20,-42.35 -20,-82.08 0,-26.33 40,-26.32 40,0 0,39.74 8.13,82.08 -20,82.08z"></path>
                                    <path class="fil0" d="M1296.04 1182.63c-28.13,0 -20,-42.35 -20,-82.08 0,-26.33 40,-26.32 40,0 0,39.73 8.13,82.08 -20,82.08z"></path>
                                    <path class="fil0" d="M1148.9 1182.63c-28.13,0 -20,-42.35 -20,-82.08 0,-26.33 40,-26.32 40,0 0,39.76 8.13,82.08 -20,82.08z"></path>
                                    <path class="fil0" d="M296.43 1570.22c-50.47,0 -91.53,-41.07 -91.53,-91.54 0,-50.47 41.07,-91.54 91.53,-91.54 50.45,0 91.52,41.07 91.52,91.54 0,50.47 -41.06,91.54 -91.52,91.54zm0 -143.07c-67.82,0 -67.81,103.06 0,103.06 67.81,0 67.82,-103.06 0,-103.06z"></path>
                                </g>
                            </svg>
                        </span>
                        <span className="name">Merosan</span>
                    </li>
                </div>
                <div className="elements">
                    <li>sub total</li>
                    <li className='amount'>SAR {subtotal.toFixed(2)}</li>
                </div>
                <div className="elements">
                    <li>Taxable amount</li>
                    <li className='amount'>SAR {(taxPercentage / 100).toFixed(2)}%</li>
                </div>
                <div className="elements">
                    <li>total tax</li>
                    <li className='amount'>SAR {(subtotal * taxPercentage / 100).toFixed(2)}</li>
                </div>
                <div className="elements line">
                    <li>grand total</li>
                    <li className="grandamount"><span className='normal'>SAR {grandTotal}</span></li>
                </div>
            </div>


            <div className="bottom">
                <div className="notes">
                    
                        <li className="icon">
                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 50 50" xml:space="preserve">
                                <g id="Layer_1_1_">
                                    <path d="M18.293,31.707h6.414l24-24l-6.414-6.414l-24,24V31.707z M45.879,7.707l-3.586,3.586l-3.586-3.586l3.586-3.586
		                                L45.879,7.707z M20.293,26.121l17-17l3.586,3.586l-17,17h-3.586V26.121z"></path>
                                    <polygon points="43.293,19.707 41.293,19.707 41.293,46.707 3.293,46.707 3.293,8.707 31.293,8.707 31.293,6.707 1.293,6.707 
		                                    1.293,48.707 43.293,48.707 	"></polygon>
                                </g>
                            </svg>
                        </li>
                        <li className="notestext">
                            Add notes
                        </li>
                    
                </div>
                <div className="options">
                    <div className="box">
                        <li className="icon">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 50 50" xml:space="preserve">
                                <g id="Layer_1">
                                    <path d="M19.38,19.265C13.464,20.481,9,25.729,9,32v17h32V32c0-6.271-4.464-11.519-10.38-12.735C33.261,17.464,35,14.431,35,11
		                c0-5.514-4.486-10-10-10S15,5.486,15,11C15,14.431,16.739,17.464,19.38,19.265z M28,21c6.065,0,11,4.935,11,11v15H11V32
		                c0-6.065,4.935-11,11-11H28z M25,3c4.411,0,8,3.589,8,8s-3.589,8-8,8s-8-3.589-8-8S20.589,3,25,3z"></path>
                                </g>
                                <g>
                                </g>
                            </svg>
                        </li>
                        <li className="icontext">
                            customer
                        </li>
                    </div>
                    <div className="box">
                        <li className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1706.66 1706.66" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xodm="http://www.corel.com/coreldraw/odm/2003">
                                <g id="Layer_x0020_1">
                                    <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                                    <path class="fil0" d="M1647.28 1240.15l-313.58 0 0 -773.64 313.58 0c32.74,0 59.39,26.64 59.39,59.39l0 144.03c0,11.04 -8.97,20 -20,20 -90.1,0 -163.4,73.31 -163.4,163.4 0,90.09 73.3,163.4 163.4,163.4 11.04,0 20,8.97 20,20l0 144.02c0,32.75 -26.65,59.4 -59.39,59.4zm-526.85 -168.63l-534.2 0c-26.33,0 -26.33,-40 0,-40l534.2 0c26.33,0 26.33,40 0,40zm0 -198.19l-534.2 0c-26.33,0 -26.33,-40 0,-40l534.2 0c26.32,0 26.34,40 0,40zm0 -198.2l-534.2 0c-26.33,0 -26.33,-40 0,-40l534.2 0c26.33,0 26.33,40 0,40zm173.27 565.02l-880.72 0 0 -773.64 880.72 0 0 773.64zm-920.72 0l-313.58 0c-32.75,0 -59.39,-26.65 -59.39,-59.39l0 -144.02c0,-11.04 8.96,-20 20,-20 90.1,0 163.4,-73.29 163.4,-163.4 0,-90.11 -73.29,-163.4 -163.4,-163.4 -11.04,0 -20,-8.96 -20,-20l0 -144.03c0,-32.75 26.64,-59.39 59.39,-59.39l313.58 0 0 773.64z"></path>
                                </g>
                            </svg>
                        </li>
                        <li className="icontext">
                            coupon
                        </li>
                    </div>
                    <div className="box">
                        <li className="icon">

                            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>Discount</title><path d="M480.641,228.776l-37.125-43.568a20.516,20.516,0,0,1-4.865-11.745l-4.557-57.057a41.8,41.8,0,0,0-38.5-38.505l-57.052-4.547a20.588,20.588,0,0,1-11.755-4.87L283.224,31.359a41.809,41.809,0,0,0-54.448,0L185.208,68.484a20.516,20.516,0,0,1-11.745,4.865l-57.057,4.557a41.8,41.8,0,0,0-38.505,38.5l-4.547,57.052a20.588,20.588,0,0,1-4.87,11.755L31.359,228.776a41.8,41.8,0,0,0,0,54.448l37.125,43.568a20.516,20.516,0,0,1,4.865,11.745l4.557,57.057a41.8,41.8,0,0,0,38.5,38.505l57.052,4.547a20.588,20.588,0,0,1,11.755,4.87l43.562,37.125a41.793,41.793,0,0,0,54.448,0l43.568-37.125a20.516,20.516,0,0,1,11.745-4.865l57.057-4.557a41.8,41.8,0,0,0,38.505-38.5l4.547-57.052a20.588,20.588,0,0,1,4.87-11.755l37.125-43.562A41.8,41.8,0,0,0,480.641,228.776ZM202.667,170.667a32,32,0,1,1-32,32A32.035,32.035,0,0,1,202.667,170.667ZM309.333,341.333a32,32,0,1,1,32-32A32.035,32.035,0,0,1,309.333,341.333Zm28.875-152.458L188.875,338.208a10.666,10.666,0,0,1-15.083-15.083L323.125,173.792a10.666,10.666,0,0,1,15.083,15.083Z"></path><path d="M309.333,298.667A10.667,10.667,0,1,0,320,309.333,10.679,10.679,0,0,0,309.333,298.667Z"></path><path d="M202.667,213.333A10.667,10.667,0,1,0,192,202.667,10.679,10.679,0,0,0,202.667,213.333Z"></path></svg>
                        </li>
                        <li className="icontext">
                            discount
                        </li>
                    </div>
                </div>
                <Finalizebar />
            </div>
        </div>
    );
}

export default Payment;
