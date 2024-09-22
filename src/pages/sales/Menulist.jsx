import React, { useState } from 'react';
import Finalizebar from '../../components/finalizebar/Finalizebar'
import '../../styles/menuliststyles.css'
import Products from '../../assets/products';

const Menulist = () => {
    let [active, setactive] = useState("all")
    return (
        <div className="menulistitem">
            <div className="topbar">
                <li className="heading">Catalog</li>

                <li className="menuicon">
                    <svg version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xml:space="preserve">
                        <g>
                            <path d="M16,10c1.7,0,3-1.3,3-3s-1.3-3-3-3s-3,1.3-3,3S14.3,10,16,10z"></path>
                            <path d="M16,13c-1.7,0-3,1.3-3,3s1.3,3,3,3s3-1.3,3-3S17.7,13,16,13z"></path>
                            <path d="M16,22c-1.7,0-3,1.3-3,3s1.3,3,3,3s3-1.3,3-3S17.7,22,16,22z"></path>
                        </g>
                    </svg>
                </li>
                <li className="closeicon">
                    <svg id="Layer_1" version="1.1" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5  c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9  c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z"></path></svg>
                </li>

            </div>
            <div className="filters">
                <div className={active == "all" ? "filteractive" : "filter"} onClick={() => { setactive("all") }} >all</div>
                <div className={active == "fav" ? "filteractive" : "filter"} onClick={() => { setactive("fav") }} >favourites</div>
                <div className={active == "bur" ? "filteractive" : "filter"} onClick={() => { setactive("bur") }} >burger</div>
                <div className={active == "san" ? "filteractive" : "filter"} onClick={() => { setactive("san") }} >sandwich</div>
                <div className={active == "jus" ? "filteractive" : "filter"} onClick={() => { setactive("jus") }} >Juice</div>
                <div className={active == "stp" ? "filteractive" : "filter"} onClick={() => { setactive("stp") }} >starpups</div>
                <div className={active == "shk" ? "filteractive" : "filter"} onClick={() => { setactive("shk") }} >milksahkes</div>
                <div className={active == "new" ? "filteractive" : "filter"} onClick={() => { setactive("new") }} >new</div>
            </div>
            <div className="items">

                {Products.map((item, index) => (
                    <div className="itemlist">
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
            <Finalizebar />
        </div>
    );
}

export default Menulist;
