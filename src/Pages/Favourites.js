import React, { useContext } from "react";
import { MeetupContext } from "../contextStore/meetupContext";
import classes from "../components/meet-ups/MeetUpItem/MeetUpItem.module.css";

const Favourites = () => {
    const ctx = useContext(MeetupContext);
    console.log("ctx", ctx.favouriteAmount);


    const removeFavouriteHandler = (id) => {


        ctx.removeFavourite(id)
    }

    return (
        <div>
            <h1>Favourites</h1>
            {ctx.favourites.map((favourite) => {
                return (
                    <div className={classes.favList}>
                        <li>
                            <h3>{favourite.title}</h3>{" "}
                        </li>
                        <div className={classes.image}>
                            <img src={favourite.image} alt="meetup" />
                        </div>

                        <li>
                            <h2> Description </h2>
                            <p> {favourite.description}</p>{" "}
                        </li>
                        <li>
                            <h2>Address</h2>
                            <p> {favourite.address}</p>
                        </li>
                        <div  className={classes.actions}>
                            <button
                               
                                onClick={() => removeFavouriteHandler(favourite.id)}>
                                Remove from Favourites
                            </button>
                        </div>

                    </div>
                );
            })}
        </div>
    );
};

export default Favourites;
