import { NavLink } from "react-router-dom";
import routes from "../utils/routes";
import styles from "./NavBar.module.css"

const NavBar = () => {
  return <nav className={styles.nav} >
      <NavLink to={routes.home}>Home</NavLink>

      <NavLink to={routes.courses}>Courses</NavLink>

      <NavLink to={routes.enrolledCourses}>Enrolled Courses</NavLink>
    </nav>
  
};

export default NavBar;
