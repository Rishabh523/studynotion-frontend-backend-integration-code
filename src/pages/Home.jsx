import React from "react";
import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom";
import HighlightText from "../components/core/HomePage/HighlightText";
import CTAButton from "../components/core/HomePage/Button"
import Banner from "../assets/Images/banner.mp4"
import CodeBlocks from "../components/core/HomePage/CodeBlocks";

function Home() {
    return(
        <div>
            {/* Section1 */}
            <div className='relative mx-auto flex flex-col w-11/12 items-center
            text-white justify-between max-w-maxContent'>
                <Link to={"/signup"}>
                    <div className="group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200 
                    transition-all duration-200 hover:scale-95 w-fit">
                        <div className="flex flex-row items-center gap-2 rounded-full px-10 py-[5px]
                        transtion-all duration-200 group-hover:bg-richblack-900">
                            <p>
                                Become an Instructor
                            </p>
                            <FaArrowRight />
                        </div>
                    </div>
                </Link>
                <div className="text-center text-4xl font-semibold mt-7">
                    Empower Your Future With 
                    <HighlightText text={"Coding Skills"} />
                </div>
                <div className="mt-4 w-[90%] text-center text-lg font-bold text-richblack-300">
                With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors.

                </div>

                <div className="flex flex-row gap-7 mt-8">
                    <CTAButton active={true} linkto={"/signup"}>
                        Learn More
                    </CTAButton>
                    <CTAButton active={false} linkto={"/login"}>
                        Book a Demo
                    </CTAButton>
                </div>

                <div className="shadow-blue-200 mx-3 my-12">
                    <video
                    muted 
                    loop
                    autoPlay
                    >
                    <source src={Banner} type ="video/mp4" />
                    </video>
                </div>

                {/* Code Section1 */}
                <div>
                    <CodeBlocks
                    position={"lg:flex-row"}
                    heading={
                        <div className="text-4xl font-semibold">
                            Unlock Your 
                            <HighlightText text={"Coding Potential"}/>
                            with our online course
                         </div>   
                    }
                    subheading = {
                        "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
                    }
                    ctabtn1={
                        {
                            btnText:"Try it Yourself",
                            linkto:"/signup",
                            active: true,
                        }
                    }
                    ctabtn2={
                        {
                            btnText:"Learn More",
                            linkto:"/login",
                            active: false,
                        }
                    }

                    codeblock={`<!DOCTYPE html>
                    <html>
                    <head><title>Example</title><linkrel="stylesheet"href="styles.css">
                    </head>
                    <body>
                    <h1><a href="/">Header</a>
                    </h1>
                    <nav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a>
                    </nav>`}
                    codeColor={"text-yellow-25"}
                    />
                   
                </div>
                   {/* Code Section 2 */}
                   <div>
                    <CodeBlocks
                    position={"lg:flex-row-reverse"}
                    heading={
                        <div className="text-4xl font-semibold">
                            Unlock Your 
                            <HighlightText text={"Coding Potential"}/>
                            with our online course
                         </div>   
                    }
                    subheading = {
                        "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
                    }
                    ctabtn1={
                        {
                            btnText:"Try it Yourself",
                            linkto:"/signup",
                            active: true,
                        }
                    }
                    ctabtn2={
                        {
                            btnText:"Learn More",
                            linkto:"/login",
                            active: false,
                        }
                    }

                    codeblock={`<!DOCTYPE html>
                    <html>
                    <head><title>Example</title><linkrel="stylesheet"href="styles.css">
                    </head>
                    <body>
                    <h1><a href="/">Header</a>
                    </h1>
                    <nav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a>
                    </nav>`}
                    codeColor={"text-yellow-25"}
                    />
                   
                </div>
            </div>

            {/* Section2 */}
            <div className="bg-pure-greys-5 text-richblack-700">
               <div className="hompage_bg h-[310px]">
                    <div className="w-11/12 max-w-maxContent flex items-center justify-center gap-5 mx-auto">
                       <div className="h-[250px]"></div>
                       <div className="flex flex-row gap-7 text-white">
                       <CTAButton active={true} linkto={"/signup"}>
                         <div className="flex items-center gap-3">
                            Explore Full Catalog
                            <FaArrowRight />
                         </div>
                       </CTAButton>
                       <CTAButton active={false} linkto={"/signup"}>
                           <div>
                            Learn More
                           </div>
                       </CTAButton>
                     
                    </div>
                    
                    </div> 
               </div>    
            </div>


            {/* Section3 */}

            {/* footer */}

        </div>
    )
}


export default Home