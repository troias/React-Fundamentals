import React, {useContext} from "react";
import MeetupContext from '../../contextStore/meetupContext'
import { Link } from "react-router-dom";
import classes from './MainNavigation.module.css'

const NavBar = () => {
  // const {favouriteAmount} = useContext(MeetupContext)
  // console.log(favouriteAmount)

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
          <li> </li>
          <Link to="/favourites">Favourites</Link>
        </li>
      </ul>
    </nav>
 
  );
};

export default NavBar;
