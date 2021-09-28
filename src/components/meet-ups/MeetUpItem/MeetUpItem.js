import React, { useContext } from "react";
import classes from "./MeetUpItem.module.css";
import Card from "../../ui/card/Card";
import { MeetupContext } from "../../../contextStore/MeetupContext";

const MeetUpItem = (props) => {
  const favoritesCtx = useContext(MeetupContext);

  console.log("favoritesCtx", favoritesCtx.favourites)
  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.items.id);
  console.log(itemIsFavorite)

  const toggleStatusHandler = () => {
    if (itemIsFavorite) {
      favoritesCtx.removeFavourite(props.items.id);
    } else {
      const favourite = {
        id: props.items.id,
        image: props.items.image,
        title: props.items.title,
        address: props.items.address,
        description: props.items.description,
      };

      favoritesCtx.addFavourites(favourite);
    }
  };

  return (
    <li>
      <Card>
        <div className={classes.image}>
          <img src={props.items.image} alt="meeting" />
        </div>
        <div className={classes.content}>
          <h3>{props.items.title}</h3>
          <address>{props.items.address}</address>
          <h3>{props.items.description}</h3>
          <div className={classes.actions}>
            <button onClick={toggleStatusHandler}>
              {itemIsFavorite ? "Remove from Favorites" : "To Favorites"}
            </button>
          </div>
        </div>
      </Card>
    </li>
  );
};

export default MeetUpItem;
