import React from 'react'
import classes from './MeetUpItem.module.css'
import Card from '../../ui/card/Card'
const MeetUpItem = (props) => {
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

                    <button>To Favourites</button>
                </div>
            </div>
            </Card>
        </li>
    )
}

export default MeetUpItem
