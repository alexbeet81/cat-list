import { Link, NavLink } from "react-router-dom";

import classes from "./Navbar.module.css";

const Navbar = () => {
  // const activeStyle = {
  //   fontWeight: "bold",
  // };

  const activeStyle = {
    color: "blue",
  };

  const isAvtive = ({ isAvtive }) => (isAvtive ? activeStyle : undefined);

  return (
    <div className={classes.container}>
      <div className={classes.links}>
        <NavLink style={isAvtive} to="/">
          Genre of Cat
        </NavLink>
        <NavLink style={isAvtive} to="categories">
          🐈-egories
        </NavLink>
        <NavLink style={isAvtive} to="/">
          My 😻 List
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
