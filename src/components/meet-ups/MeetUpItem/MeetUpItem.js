import React, {useContext} from 'react'
import classes from './MeetUpItem.module.css'
import Card from '../../ui/card/Card'
import {MeetupContext} from '../../../contextStore/meetupContext'


const MeetUpItem = (props) => {
    const {addFavourites} = useContext(MeetupContext) 

    const addFavouriteHandler = (item) => {
        console.log(item)
        const favourite = {
            image: props.items.image, 
            title: props.items.title, 
            address: props.items.address,
            description: props.items.description,

        }
        console.log(favourite)
        addFavourites(favourite)
    }


    
    return (
        <li>
            <Card>
            <div className={classes.image}>
                <img
                    src={props.items.image}
                    alt="meeting" />
            </div>
            <div className={classes.content}>
                <h3>{props.items.title}</h3>
                <address>{props.items.address}</address>
                <h3>{props.items.description}</h3>
                <div className={classes.actions}>

                    <button onClick={addFavouriteHandler}>Add to Favourites</button>
                   
                </div>
            </div>
            </Card>
        </li>
    )
}

export default MeetUpItem
