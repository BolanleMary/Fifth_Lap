import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import routes from "./components/utils/routes";
import Home from "./pages/home";
import Courses from "./pages/courses";
import EnrolledCourses from "./pages/enrolledCourses";
import { createContext} from "react";

const EnrollContext= createContext(0)

function App() {
  return <EnrollContext.Provider> 
    <>

      <NavBar />
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.courses} element={<Courses />} />
        <Route path={routes.enrolledCourses} element={<EnrolledCourses />} />
      </Routes>
      
    </>
    </EnrollContext.Provider>
  
}

export default App;
