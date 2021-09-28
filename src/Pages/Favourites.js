import React, { useContext } from "react";
import { MeetupContext } from "../contextStore/meetupContext";
import classes from "../components/meet-ups/MeetUpItem/MeetUpItem.module.css";
import MeetupList from '../components/meet-ups/MeetUpList/MeetupList'

const Favourites = () => {
    const ctx = useContext(MeetupContext);
   

    let content;
    if (ctx.favouriteAmount === 0) {
        content = <p>You got no favourites yet?</p>
    } else {
        content = <MeetupList meetups={ctx.favourites}/>
    }



    return (
    <section>
        <h1>My Favourites</h1>
        {content}
        
    </section>
    );
};

export default Favourites;
