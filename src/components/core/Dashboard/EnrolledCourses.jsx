import ProgressBar from "@ramonak/react-progress-bar";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";


const EnrolledCourses = () => {
    
    const {token} = useSelector((state) => state.auth);

    const {enrolledCourses, setEnrolledCourses} = useState(null);
    
    const getEnrolledCourses =async() => {
         try{
            const response = await getEnrolledCourses(token);
            setEnrolledCourses(response);
        } catch(error) {
            console.log("Unable to fetch Enrolled Courses"); 
        }
    }
    useEffect(() => {
         getEnrolledCourses(); 
    },[]);

    return(
        <div>
           <div>
            Enrolled Courses
           </div>
           {
            !enrolledCourses ? (<div>
                Loading...
            </div>) 
            : !enrolledCourses.length() ? (<p>You have not enrolled in any course yet</p>)
            : (
                <div className="text-white">
                     <div>
                       <p>Course Name</p>
                       <p>
                        Durations
                       </p>
                       <p>
                        Progress
                       </p>
                     </div> 
                 {/*  cards shuru hote h ab*/}
                {
                    enrolledCourses.map((course,index) => (
                        <div
                        key={index}>
                            <div>
                                <img src={course.thumbnail} />
                                <div>
                                    <p>
                                        {course.courseName}
                                    </p>
                                    <p>
                                        {course.courseDescription}
                                    </p>
                                    </div>

                                    <div>
                                        {course?.totalDuration}
                                    </div>
                                    <div>
                                        <p>Progress: {course.progressPercentage || 0}%</p>
                                        <ProgressBar 
                                               completed={course.progressPercentage || 0}
                                               height="8px"
                                               isLabelVisible={false}
                                            />
                                    </div>
                                </div>
                        </div>
                    )
                )
                }
                    
                </div>    
            )
           }

        </div>
    )
}

export default EnrolledCourses