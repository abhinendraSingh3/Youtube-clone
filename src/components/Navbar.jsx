import React from "react";
import menu from '../images/menu.jpeg'
import logo from '../images/logo.jpeg'
import search from '../images/search.png'
import mic from '../images/mic.png'
import Create from '../images/Create.png'
import bell from '../images/bell.png'
import user from '../images/user.png'

const Navbar = () => {
    return (
        <>
            <div className='main'>
                <div className="icons">
                    <img src={menu} alt="Menu" srcset="" />
                    <a href="//www.youtube.com">
                        <img src={logo} alt="Youtube.com" srcset="" />
                    </a>
                </div>
                <div className="search-mic">
                    <div id="search">
                        <input typeof="search" id="searchBar" placeholder="Search"></input>
                    </div>
                    <div id="srIcon">
                        <input name="Imagebutton2" type='image' alt="" src={search} id="imgSearch"></input>
                    </div>
                    <div id="mic">
                        <input name="Imagebutton" type='image' alt="" src={mic} id="imge"></input>
                    </div>
                </div>
                <div className="profileSection">
                    <div id="createbtn">
                    <a href="//www.youtube.com">
                        <img src={Create} alt="create button" srcset="" />
                    </a>
                    </div>
                    <div id="bellbtn">
                    <a href=" ">
                        <img src={bell} alt="notification" srcset="" />
                    </a>
                    </div>
                    <div id="user">
                    <a href=" ">
                        <img src={user} alt="user" srcset="" />
                    </a>
                    </div>
                </div>
            </div>
        </>
    )
};
export default Navbar