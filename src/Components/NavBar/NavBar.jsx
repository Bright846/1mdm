import React from 'react';
import Logo from "../../assets/1mdm-168x58.png";

const NavBar = () => {
    return (
        <div className="bg-white z-50 sticky top-0">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center px-4 md:px-16 pt-4 text-[#7c8a97] text-[16px] md:text-[17px] font-normal gap-2 md:gap-0">
                <span className="text-center md:text-left">World's Largest Medical Equipment Market Place</span>
                <span className="text-[#222] font-normal cursor-pointer text-center md:text-right">
                    <span className="font-normal hover:text-red-600">My account |</span>
                    <span className="font-normal hover:text-red-600"> Contact Us</span>
                </span>
            </div>
            <hr className="mx-4 md:mx-16 mt-2 border-gray-200" />
            <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start px-4 md:px-16 mt-4 md:mt-6 gap-4 md:gap-0">
                <img src={Logo} alt="Logo" className="w-[120px] h-[42px] md:w-[168px] md:h-[58px]" />
                <nav className="flex flex-col md:flex-row gap-4 md:gap-8 text-[#7c8a97] text-[16px] md:text-[17px] font-normal mt-2 md:mt-2 items-center">
                    <a href="#" className="hover:text-red-600">About Us</a>
                    <a href="#" className="hover:text-red-600">Our Story</a>
                    <a href="#" className="hover:text-red-600">Sell on 1MDM</a>
                    <a href="#" className="hover:text-red-600">Pricing</a>
                </nav>
            </div>
        </div>
    );
};

export default NavBar;
