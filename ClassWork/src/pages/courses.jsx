import Styles from "./Co"
import CourseCard from "./courseCard"

const Courses =({setEnrolledCourse})=>{
    const courses =[
        {
            id: 1,
            title: "React for Beginner",
            description: "Learn React from scratch"
        },

        {
            id: 2,
            title: "Javascript Mastery",
            description: "Deep dive into JavaScript"
        }


    ]
    return (<div>
    <h1>Choose your Courses</h1>
    {courses.map(course =>(
        <CourseCard
        key={course.id}
        course={course}
        setEnrolledCourse={setEnrolledCourse}
        />
    ))}

    </div>

    )
};
export default Courses