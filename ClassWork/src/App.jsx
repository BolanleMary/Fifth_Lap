import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import routes from "./components/utils/routes";
import Home from "./pages/home";
import Courses from "./pages/courses";
import EnrolledCourses from "./pages/enrolledCourses";
import { useState } from "react";




function App() {
  const [enrolledCourses, setEnrolledCourses] = useState(null)
  return  (
        <>

      <NavBar />
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.courses} element={<Courses setEnrolledCourses={setEnrolledCourses} />} />
        <Route path={routes.enrolledCourses} element={<EnrolledCourses enrolledCourses={enrolledCourses} />} />
      </Routes>
      
    </>
  )
  
}

export default App;
