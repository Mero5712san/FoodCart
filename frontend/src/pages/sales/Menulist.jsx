import React, { useState, useEffect } from 'react';
import Finalizebar from '../../components/finalizebar/Finalizebar';
import '../../styles/menuliststyles.css';
import { fetchDataFromApi } from '../../datafetch'; 

// import {products} from '../../sample'

const Menulist = ({ onSelectFood, foodselected, pagecond}) => {

    const [Products, setProducts] = useState([]); 
    const [loading, setLoading] = useState(true); 
    const [active, setActive] = useState("all");
    let [page, setpage] = useState("menulist")
    
    let togglepage = () =>{
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


    useEffect(() => {
        const fetchProducts = async () => {
          const data = await fetchDataFromApi(); 
          setProducts(data); 
          setLoading(false); 
        };
    
        fetchProducts();
      }, []); 
    
      if (loading) {
        return <div>Loading...</div>;
      }

    console.log(Products)


    const filteredProducts = () => {
        if (active === "all") {
            return Products;
        }
        if (active === "favourites") {
            return Products.filter((product) => product.categories.toLowerCase().includes("favourites"));
        }
        if (active === "burger") {
            return Products.filter((product) => product.categories.toLowerCase().includes("burger"));
        }
        if (active === "sandwich") {
            return Products.filter((product) => product.categories.toLowerCase().includes("sandwich"));
        }
        if (active === "juice") {
            return Products.filter((product) => product.categories.toLowerCase().includes("juice"));
        }
        if (active === "startups") {
            return Products.filter((product) => product.categories.toLowerCase().includes("startups"));
        }
        if (active === "milkshake") {
            return Products.filter((product) => product.categories.toLowerCase().includes("milkshake"));
        }
        if (active === "new") {

            return Products.filter((product) => product.categories.toLowerCase().includes("new"));
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

                <div className="items">
                    {filteredProducts().map((item, index) => (
                        <div className="itemlist" key={index} onClick={() => { onSelectFood(item); foodselected(true); }}>
                            <div className="itemimg">
                                <img src={item.img} alt="! found" />
                            </div>
                            <div className="itemdetail">
                                <li className="itemname">{item.name}</li>
                                <li className="varients">{item.varient}</li>
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