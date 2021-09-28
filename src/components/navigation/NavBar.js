import React, {useContext, useEffect} from "react";
import {MeetupContext} from '../../contextStore/MeetupContext'
import { Link } from "react-router-dom";
import classes from './MainNavigation.module.css'

const NavBar = () => {

  useEffect(()=> {},[])
  const ctx = useContext(MeetupContext)
  console.log("ctx", ctx.favouriteAmount)
 

  return (


    <nav className={classes.header}>
      <ul>
        <h1 className={classes.logo}>APP</h1>
        <li>
          <Link to="/to-do">ToDo</Link>
        </li>
        <li>
          <Link to="/newmeetups">New Meetups</Link>
        </li>
        <li>
          <Link to="/all-meetups">All Meetups</Link>
        </li>
  
        <li>
         
          <Link to="/favourites">
       
            Favourites
            <span className={classes.badge}>{ctx.favouriteAmount}</span>
          </Link>
        </li>
      </ul>
    </nav>
 
  );
};

export default NavBar;
