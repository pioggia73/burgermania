import React from 'react';
import classes from '../Layout/Layout.module.css';

const Layout = (props) => {
   return (
      <>
      <div>
         Toolbar, SideDrawer, Backdrop
      </div>
      <main className={classes.content}>
         {props.children}
      </main>
      </>
   )
}

export default Layout;
