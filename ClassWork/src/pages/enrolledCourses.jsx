const EnrolledCourses =({enrolledCourse}) =>{

    if(!enrolledCourse){
        return<p>No Course selected</p>
    }
    return <div>
    <h2>You are enrolling in:</h2>
     <h3>{enrolledCourse.title}</h3>
      <p>{enrolledCourse.description}</p>

      <button>Confirm Enrollment</button>
    </div>
}

export default EnrolledCourses