import React, {useState} from 'react';
import { LuMenu , LuX } from "react-icons/lu";
import {NavLink} from "react-router-dom";
import logo from "../assets/logo.png";
import Searchbar from './Searchbar';

function Navbar() {
    const Links = [
        {name:"Home",to:"/"},
        {name:"Destination",to:"/destination"},
        {name:"About",to:"/about"},
        {name:"Contact",to:"/contact"},
      ];
    const activeLink = "text-blue-500 font-bold border-b-2 border-blue-300";
    const normalLink = "text-gray-400 hover:text-gray-500";

    const [ menuOpen, setMenuOpen] = useState(false);

    const handleToggleMenu = () => {
        setMenuOpen(!menuOpen);
      };

    const handleCloseMenu = () => {
    setMenuOpen(false);
    };

    return(
        <div>
            <nav className="relative shadow-md px-10 py-2 flex justify-between items-center bg-white">
                <div className="lg:hidden bg-[#608BB7] rounded-lg">
                    <button className="flex items-center text-yellow-300 p-2" onClick={handleToggleMenu}>
                        <LuMenu className="block w-6 h-6 "/>
                    </button>
                </div>

                <a className="text-xl flex leading-none" href="#">
                    <img src={logo} alt="logo" className='h-12 w-12'/>
                    <h1 className=' text-[#608BB7]  font-extrabold text-xl self-center whitespace-nowrap'>
                    Jelajah Wisata
                    </h1>
                </a>

                <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
                {Links.map( ( navlink ) => (
                        <NavLink
                        key={navlink.name}
                        to={navlink.to}
                        className={({isActive}) => isActive ? activeLink : normalLink}>
                        {navlink.name}
                        </NavLink>
                    ))}
                </ul>
                <div className='flex md:flex-grow-1'>
                    <Searchbar/>
                </div>
            </nav>
            {menuOpen && (
                <div className="lg:hidden z-50">
                <div className="fixed inset-0 bg-gray-800 opacity-25"  ></div>
                <nav className="fixed top-0 z-50 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
                    <div className="flex items-center mb-5">
                        <a className="mr-auto text-xl flex leading-none" href="#">
                            <img src={logo} alt="logo" className='h-10  w-10'/>
                            <h1 className=' text-[#608BB7] font-bold text-xl self-center whitespace-nowrap'>
                            Jelajah Wisata
                            </h1>
                        </a>
                        <button  onClick={handleCloseMenu}>
                            <LuX className="h-6 w-6 text-[#447692] cursor-pointer hover:text-gray-500"/>
                        </button>
                    </div>
                    <div>
                        <ul>
                        {Links.map( ( navlink ) => (
                            <li key={navlink.name}
                            className='block pl-3 p-2 text-lg font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded-full'>
                                <NavLink
                                    to={navlink.to}
                                    className={({isActive}) => isActive ? activeLink : normalLink}>
                                    {navlink.name}
                                </NavLink>
                            </li>
                        ))}
                        </ul>

                    </div>
                </nav>
                </div>
            )}
    </div>
    )
}
export default Navbar;
