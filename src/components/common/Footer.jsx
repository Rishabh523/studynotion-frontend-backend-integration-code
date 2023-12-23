import React from "react";
import Logo from "../../assets/Logo/Logo-Full-Light.png";
import {FooterLink2} from "../../data/footer-links";
import { Link } from "react-router-dom";
import {FaFacebook, FaGoogle, FaTwitter, FaYoutube} from "react-icons/fa";



const BottomFooter =[
    "Privacy Policy", 
    "Cookie Policy", 
    "Terms"
]
const Resources =[
    "Articles",
  "Blog",
  "Chart Sheet",
  "Code challenges",
  "Docs",
  "Projects",
  "Videos",
  "Workspaces",
]


const Plans = [
    "Paid memberships", 
    "For students",
    "Business solutions"

]
const Community = [
    "Forums", 
    "Chapters", 
    "Events"
]
const Footer = () => {
    
    return(
        <div className="bg-richblack-800">
            <div className="flex lg:flex-row gap-8 items-center justify-between w-11/12 max-w-maxContent text-richblack-400 leading-6 mx-auto relative py-14">
                <div className="border-b w-[100%] flex flex-col lg:flex-row pb-5 border-richblack-700">
                    {/* Section 1 */}
                    <div className="lg:w-[50%] flex flex-wrap flex-row justify-between lg:border-r lg:border-richblack-700 pl-3 lg:pr-5 gap-3">
                        <div className="w-[30%] flex flex-col gap-3 lg:w-[30%] mb-7 lg:pl-0">
                            <img src={Logo} 
                            alt="LogoImage"
                            className="object-contain"
                            />
                            <h1 className="text-richblack-50 font-semibold text-[16px]">
                              Company
                            </h1>
                            <div className="flex flex-col gap-2">
                                {["About", "Careers", "Affiliates"].map((ele, i) => {
                                    return(
                                        <div
                                        key={i}
                                        className="text-[14px] cursor-poinet hover:text-richblack-50 transition-all duration-200"
                                        >
                                        <Link to={ele.toLowerCase()}>{ele}</Link>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="flex gap-3 text-lg">
                                <FaFacebook />
                                <FaGoogle />
                                <FaTwitter />
                                <FaYoutube />
                            </div>
                        </div>

                    </div>

                </div>
                <div className="w-[48%] lg:w-[30%] mb-7 lg:pl-0">
                    <h1 className=""></h1>
                </div>

            </div>
          
        </div>
    )
}
export default Footer