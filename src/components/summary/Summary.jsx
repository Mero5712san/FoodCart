import React from 'react';
import '../../styles/summarystyle.css'
const Summary = () => {
    let id = "000001"
    return (
        <div className="summary">
            <div className="text">
                <li className="btext">cart summary</li>
                <li className="orderid">orderid: <span className='id'>{id}</span></li>
            </div>
            <div className="icons">
                <div className="user">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 50 50" xml:space="preserve">
                        <g id="Layer_1">
                            <path d="M19.38,19.265C13.464,20.481,9,25.729,9,32v17h32V32c0-6.271-4.464-11.519-10.38-12.735C33.261,17.464,35,14.431,35,11
		c0-5.514-4.486-10-10-10S15,5.486,15,11C15,14.431,16.739,17.464,19.38,19.265z M28,21c6.065,0,11,4.935,11,11v15H11V32
		c0-6.065,4.935-11,11-11H28z M25,3c4.411,0,8,3.589,8,8s-3.589,8-8,8s-8-3.589-8-8S20.589,3,25,3z"></path>
                        </g>
                        <g>
                        </g>
                    </svg>
                </div>
                <div className="bench">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><title>Table</title><g id="Table"><path d="M46,8H2a2,2,0,0,0-2,2v3a2,2,0,0,0,2,2H3V38a2,2,0,0,0,2,2H6.1a2,2,0,0,0,1.989-1.779L9.9,22H38.1l1.8,16.22A2,2,0,0,0,41.9,40H43a2,2,0,0,0,2-2V15h1a2,2,0,0,0,2-2V10A2,2,0,0,0,46,8ZM43,38H41.9l-1.9-17.11A1,1,0,0,0,39,20H9a1,1,0,0,0-.994.89L6.1,38H5V15H43ZM2,13V10H46v3Z"></path></g></svg>
                </div>
                <div className="menu">
                <svg version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 32 32" xml:space="preserve">
                        <g>
                            <path d="M16,10c1.7,0,3-1.3,3-3s-1.3-3-3-3s-3,1.3-3,3S14.3,10,16,10z"></path>
                            <path d="M16,13c-1.7,0-3,1.3-3,3s1.3,3,3,3s3-1.3,3-3S17.7,13,16,13z"></path>
                            <path d="M16,22c-1.7,0-3,1.3-3,3s1.3,3,3,3s3-1.3,3-3S17.7,22,16,22z"></path>
                        </g>
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default Summary;
