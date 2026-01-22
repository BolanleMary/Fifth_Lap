import { NavLink } from "react-router-dom";
import routes from "./utils/routes";

const NavBar = () => {
  return <nav>
      <NavLink to={routes.home}>Home</NavLink>

      <NavLink to={routes.courses}>Courses</NavLink>

      <NavLink to={routes.enrolledCourses}>Enrolled Courses</NavLink>
    </nav>
  
};

export default NavBar;
