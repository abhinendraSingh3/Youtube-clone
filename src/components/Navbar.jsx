import React from "react";
import menu from '../images/menu.jpeg'
import logo from '../images/logo.jpeg'
import search from '../images/search.png'
const Navbar = () => {
    return (
        <>
            <div className='main'>  
                <div className="icons">
                    <img src={menu} alt="Menu" srcset="" />
                    <img src={logo} alt="Youtube.com" srcset="" />
                </div>
                <div className="search-mic">
                    <div id="search">
                        <input typeof="search" id="searchBar" placeholder="Search"></input>
                    </div>
                    <div id="srIcon">
                            <img src={search} alt="seacrh" srcset="" input type="submit"/>
                    </div>
                </div>
            </div>
        </>
    )
};
export default Navbar