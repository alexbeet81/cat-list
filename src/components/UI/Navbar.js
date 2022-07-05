import classes from "./Navbar.module.css";

const Navbar = () => {
  return <div className={classes.container}>
    <div>
      <a>Genre of Cat</a>
      <a>🐈-agories</a>
      <a>My 😻 List</a>
    </div>
  </div>
};

export default Navbar;