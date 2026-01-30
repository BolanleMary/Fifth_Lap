import routes from "./components/utils/routes";
import { useNavigate } from "react-router";

const CourseCard = ({course, setEnrolledCourse}) =>{
    const navigate =useNavigate();

    const handleEnroll =() =>{
        setEnrolledCourse(course);
        navigate(routes.enrolledCourses)
    }

    return (
        <div style={{marginBottom: "1.5rem"}}>
<h3>{course.title}</h3>
<p>{course.description}</p>
<button onClick={handleEnroll}></button>
        </div>
    )
}

export default CourseCard