import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { apiConnector } from "../../services/apiconnector";
import { contactusEndpoint } from "../../services/apis";
import CountryCode from "../../data/countrycode.json"

const ContactUsForm  = () => {

    const [loading, setLoading] =useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors, isSubmitSuccessful}
    } = useForm();
    

    const submitContactForm = async(data) => {
        console.log("Logging Data", data);
        try {
            setLoading(true);
          //  const response = await apiConnector("POST", contactusEndpoint.CONTACT_US_API, data);
          const response = {status: "OK"};  
          console.log("Logging response", response);
        } catch(error) {
           console.log("Error", error.message);
           setLoading(false);
        }
    }

    useEffect( () => {
        if(isSubmitSuccessful) {
            reset({
              email:"",
              firstName:"",
              lastName:"",
              message:"",
              phoneNo:"",  
            })
        }
    }, [reset, isSubmitSuccessful] );


    return(
      <form onSubmit={handleSubmit(submitContactForm)}>
       <div className="flex flex-col gap-14"> 
          <div className="flex gap-5">
          {/* firstname */}
          <div className="flex flex-col ">
            <label htmlFor="firstName">
                First Name
            </label>
            <input 
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Enter First Name"
                {...register("firstName", {required:true})}
                className="text-black"
            />
            {
                errors.firstName && (
                    <span>
                        Please enter your name
                    </span>
                )
            } 
            </div>

            {/* lastName */}
            <div className="flex flex-col ">
            <label htmlFor="lastName">
                Last Name
            </label>
            <input 
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Enter Last Name"
                {...register("lastName")}
                className="text-black"
            />
           
            </div>

           

          </div>
           {/* email */}
           <div className="flex flex-col">
                <label htmlFor="email">
                    Email Address
                </label>
                <input 
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter email Addess"
                  {...register("email", {required:true})}
                  className="text-black"
                  />
                  {
                    errors.email && (
                        <span>
                            Please enter your email address
                        </span>
                    )
                  }
            </div>

            {/* phone No */}
            <div className="flex flex-col ">
               <label htmlFor="phonenumber">
                Phone Number
               </label>
               <div className="flex flex-row gap-1 ">
                  {/* dropdown */}
                  
                    <select
                          name="dropdown"
                          id="dropdown"
                          className="bg-yellow-50 w-[80px]"
                          {...register("countrycode", {required: true})}
                    >
                        {
                            CountryCode.map( (element,index) => {
                                return(
                                    <option key={index} value={element.code}>
                                        {element.code} -{element.country}
                                    </option>
                                )
                            })
                        }
                    </select>
                  
                    <input
                    type="number"
                    name="phonenumber" 
                    id="phonenumber"
                    placeholder="12345 67890"
                    className="text-black w-[calc(100%-90px)]"
                    {...register("phoneNo",
                    {
                        required:{ value:true, message: "Please enter phone number"},
                        maxLength:{ value:10, meassage:"Invalid Phone Number"},
                        minLength: {value:8, message:"Invalid Phone Number"}
                    })}
                    />

                  
               </div>
               {
                errors.phoneNo && (
                    <span>
                        {errors.phoneNo.message}
                    </span>
                )
               }
            </div>

            {/* message */}
            <div className="flex flex-col">
                <label htmlFor="message">
                    Message
                </label>
                <textarea 
                    name="message"
                    id="message"
                    cols="30"
                    rows="7"
                    placeholder="Enter your message here"
                    {...register("message", {required:true})}
                    className="text-black"
                />
                {
                    errors.message && (
                        <span>
                            Please enter your message.
                        </span>
                    )
                }
            </div>
            
            <button type="submit"
        className="rounded-md  bg-yellow-5 text-center px-6 py-2 text-[16px] font-bold text-black">
              Send Message 
            </button>
        </div>

      </form>
    )
}
export default ContactUsForm