import React from 'react'
import classes from './MeetUpItem.module.css'
const MeetUpItem = (props) => {
    return (
        <div>
            <div className={classes.image}>
                <img 
                src={props.items.image}
                alt="meeting" />
            </div>
            <div className={classes.content}>
                <h3>{props.items.title}</h3>
                <h3>{props.items.address}</h3>
                <h3>{props.items.description}</h3>
                <div className={classes.actions}>
               
                    <button>Button</button>
                </div>
            </div>
        </div>
    )
}

export default MeetUpItem
