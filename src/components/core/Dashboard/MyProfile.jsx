import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import IconBtn from "../../common/IconBtn";
import {RiEditBoxLine} from "react-icons/ri"

const MyProfile = () => {

    const {user} = useSelector( (state) => state.profile)
    const navigate = useNavigate();
    
    return(
        <div className="text-white">
            <h1 className="mb-14 text-3xl font-medium text-richblack-5">
                My Profile
            </h1>

            {/* section1 */}

            <div className="flex items-center justify-between rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12">
                <div className="flex items-center gap-x-4">
                    <img src={user?.image} 
                    alt={`profile-${user?.firstName}`}
                    className="aspect-square w-[70px] rounded-full object-cover"
                    />
                    <div className="space-y-1">
                    <p className="text-lg font-semibold text-richblack-5">
                       {user?.firstName + " " + user?.lastName}
                    </p>
                    <p className="text-sm text-richblack-300">
                        {user?.email}
                    </p>
                    </div>

            
                <IconBtn 
                    text="Edit"
                    onClick={ () => {
                        navigate("/dashboard/settings");
                    }}
                >
                    <RiEditBoxLine />
                </IconBtn>
                </div>
                {/* section 2 */}
                <div>
                    <div>
                        <p>
                            About
                        </p>
                        <IconBtn
                          text= "Edit"
                          onClick={ () => {
                            navigate("/dashboard/settings")
                          }}>

                        </IconBtn>
                    </div>
                    <p>{user?.additionalDetails?.about ?? "Write Smething about Yourself"}</p>    

                </div>

                {/* section 3 */}
                <div>
                    <div>
                        <p>Personal Details</p>
                        <IconBtn
                          text= "Edit"
                          onClick={ () => {
                            navigate("/dashboard/settings")
                          }}>

                        </IconBtn>
                    </div>
                    <div>
                        <p>First Name</p>
                        <p>{user?.firstName}</p>
                    </div>
                    <div>
                        <p>Email</p>
                        <p>{user?.email}</p>
                    </div>
                    <div>
                        <p>Gender</p>
                        <p>{user?.additionalDetails?.gender ?? "Add Gender"}</p>
                    </div>
                    <div>
                        <p>Last Name</p>
                        <p>{user?.lastName}</p>
                    </div>
                    <div>
                        <p>Phone Number</p>
                        <p>{user?.additionalDetails?.contactNumber ?? "Add Contact Number"}</p>
                    </div>
                    <div>
                        <p>Date of Birth</p>
                        <p>{user?.additionalDetails?.dateOfBirth ?? "Add Date of Birth"}</p>
                    </div>
                </div>
                </div>
            </div>
        
    )
}
export default MyProfile