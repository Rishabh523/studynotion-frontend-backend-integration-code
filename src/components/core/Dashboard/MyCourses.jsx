import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { fetchInstructorCourses } from "../../../services/operations/courseDetailsAPI";
import IconBtn from "../../common/IconBtn";
import CourseTable from "./InstructorCourses/CourseTable";
import { useSelector } from "react-redux";

const MyCourses = () => {

    const {token} = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchCourses =  async () => {
          const result = await fetchInstructorCourses(token);
          if(result) {
            setCourses(result);
          }
        }
        fetchCourses(); 
    },[])
  return (
    <div>
        <div>
            <h1>
                My Courses
            </h1>
            <IconBtn 
            text="Add Course"
            onClick={() => navigate("/dashboard/add-course")}
              />
              {/* // todo: add icon */}
        </div> 
        {courses && <CourseTable courses={courses} setCourses={setCourses} />}
    </div>
  )
}

export default MyCourses