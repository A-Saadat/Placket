import React from "react";
import './Navbar.css'

export default class Navbar extends React.Component {

    constructor (props){
        super(props);
    }

    render(){
        return (
            <nav class="mainNav font-vazir bg-[#f4f4e5] font-bold px-7 py-3 sticky top-0 z-20 shadow-md rounded-2xl text-mainColor">
                <ul class="flex items-center justify-between">
                    <li class="navbar_toggler lg:ml-6 cursor-pointer">
                        <svg class="burger-btn" width="30" viewBox="0 0 40 26" xmlns="http://www.w3.org/2000/svg">
                        <rect class="burger-btn--1" width="30" height="6" rx="3" ry="3" />
                        <rect class="burger-btn--2" width="35" height="6" y="10" rx="3" ry="3" />
                        <rect class="burger-btn--3" width="40" height="6" y="20" rx="3" ry="3" />
                    </svg>
                    </li>
                    <li class="logo cursor-pointer">
                        <a class="flex items-center gap-1 select-none">
                            <img src="./img/NavbarLogo.svg" alt="${Navbar_logo}" width="45" />
                            <span class="text-[2.5rem] font-lalezar text-mainColor">پلاکت</span>
                        </a>
                    </li>
                    <li class="search_input mr-10">
                        <div class="search flex items-center relative">
                            <input type="text" class="w-full placeholder:text-sm bg-[#a0a08d] text-[#333d29] placeholder:text-[#333d29] p-2 rounded-lg focus:ring-4 transition-all duration-150 ring-green-450 placeholder:font-medium" placeholder="دنبال چه کتابی میگردی؟!" />
                            <a href="#" class="absolute left-3 text-sm top-[13px]">
                                <i class="fa-solid fa-magnifying-glass text-mainColor"></i>
                            </a>
                        </div>
                    </li>
                    <li class=" xl:block hidden">
                        <ul class="flex gap-5 mr-10">
                            <li><a href="#Category">دسته بندی ها</a></li>
                            <li><a href="#Ads">آگهی ها</a></li>
                            <li><a href="#ContactUs">ارتباط با ما</a></li>
                        </ul>
                    </li>
                    <li class="notifi flex items-center gap-6">
                        <div class="flex gap-2">
                            <a href="#">
                                <i class="fa-solid fa-bell text-mainColor text-2xl" title=" اعلان ها"></i>
                            </a>
                            <a href="#">
                                <i class="fa-solid fa-clock-rotate-left text-mainColor text-2xl " title="اخرین درخواست ها"></i>
                            </a>
                        </div>

                        <div class="profile flex items-center gap-3 cursor-pointer relative ">
                            <img class="profile_pic w-[45px] h-[45px] border-2 border-green-650" src="./img/user.png" alt=""/>
                            <span>علی سعادت</span>
                            <i class="fa-solid fa-chevron-down text-sm translate-y-[-2px]"></i>
                        </div>
                    </li>
                </ul>
            </nav>
        )
    }
}