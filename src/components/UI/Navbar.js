import { Link } from "react-router-dom";

import classes from "./Navbar.module.css";

const Navbar = () => {
  return <div className={classes.container}>
    <div className={classes.links}>
      <Link to="/">Genre of Cat</Link>
      <Link to="/">🐈-agories</Link>
      <Link to="/">My 😻 List</Link>
    </div>
  </div>
};

export default Navbar;