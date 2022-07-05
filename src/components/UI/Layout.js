import Navbar from "./Navbar";
import classes from "./Layout.module.css";
import { Fragment } from "react";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Navbar />
      <div className={classes.flexContainer}>
        <main className={classes.container}>{children}</main>
      </div>
    </Fragment>
  );
};

export default Layout;
