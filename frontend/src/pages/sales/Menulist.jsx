import React, { useState, useEffect } from 'react';
import Finalizebar from '../../components/finalizebar/Finalizebar';
import '../../styles/menuliststyles.css';
// import Products from '../../assets/products';

const Menulist = ({ onSelectFood, foodselected, pagecond }) => {

    const [Products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://127.0.0.1:3000/api/products');
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    console.log(Products);



    const [active, setActive] = useState("all");
    let [page, setpage] = useState("menulist")
    let togglepage = () => {
        page = page == "payment" ? "menulist" : "payment"
        setpage(page)
        pagecond(page)
    }
    const handleFilterClick = (filter) => {
        setActive(filter);
    };

    const handleItemClick = (item) => {
        onSelectFood(item);
        foodselected(true);
    };


    const filteredProducts = () => {
        if (active === "all") {
            return Products;
        }
        if (active === "favourites") {
            return Products.filter((product) => product.catagories.toLowerCase().includes("favourites"));
        }
        if (active === "burger") {
            return Products.filter((product) => product.catagories.toLowerCase().includes("burger"));
        }
        if (active === "sandwich") {
            return Products.filter((product) => product.catagories.toLowerCase().includes("sandwich"));
        }
        if (active === "juice") {
            return Products.filter((product) => product.catagories.toLowerCase().includes("juice"));
        }
        if (active === "startups") {
            return Products.filter((product) => product.catagories.toLowerCase().includes("startups"));
        }
        if (active === "milkshake") {
            return Products.filter((product) => product.catagories.toLowerCase().includes("milkshake"));
        }
        if (active === "new") {

            return Products.filter((product) => product.catagories.toLowerCase().includes("new"));
        }
        return Products;
    };

    return (
        <div className="menulistitem">
            <div>
                <div className="topbar">
                    <li className="heading">Catalog</li>

                    <li className="menuicon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                            <g>
                                <path d="M16,10c1.7,0,3-1.3,3-3s-1.3-3-3-3s-3,1.3-3,3S14.3,10,16,10z"></path>
                                <path d="M16,13c-1.7,0-3,1.3-3,3s1.3,3,3,3s3-1.3,3-3S17.7,13,16,13z"></path>
                                <path d="M16,22c-1.7,0-3,1.3-3,3s1.3,3,3,3s3-1.3,3-3S17.7,22,16,22z"></path>
                            </g>
                        </svg>
                    </li>
                    <li className="closeicon" onClick={togglepage}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z"></path>
                        </svg>
                    </li>
                </div>

                <div className="filters">
                    {['all', 'favourites', 'burger', 'sandwich', 'juice', 'startups', 'milkshake', 'new'].map((filter) => (
                        <div
                            key={filter}
                            className={active === filter ? "filteractive" : "filter"}
                            onClick={() => handleFilterClick(filter)}
                        >
                            {filter}
                        </div>
                    ))}
                </div>
                <div className='scroll'>
                    <li className="filled">-</li>
                </div>
                <div className="items">
                    {filteredProducts().map((item, index) => (
                        <div className="itemlist" key={index} onClick={() => { onSelectFood(item); foodselected(true); }}>
                            <div className="itemimg">
                                <img src={item.img} alt="! found" />
                            </div>
                            <div className="itemdetail">
                                <li className="itemname">{item.name}</li>
                                <li className="varients">{item.varient} {item.varient > 0 ? "varients" : ""}</li>
                            </div>
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
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <Finalizebar />
            </div>
        </div>
    );
};

export default Menulist;
