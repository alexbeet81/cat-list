import { NavLink } from "react-router-dom";

import classes from "./Navbar.module.css";

const Navbar = () => {
  const activeStyle = {
    fontWeight: "bold",
  };

  const isActive = ({ isActive }) => (isActive ? activeStyle : undefined);

  return (
    <div className={classes.container}>
      <div className={classes.links}>
        <NavLink style={isActive} to="/">
          Kinds of Cat
        </NavLink>
        <NavLink style={isActive} to="categories">
          🐈-egories
        </NavLink>
        <NavLink style={isActive} to="/my_list">
          My 😻 List
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
