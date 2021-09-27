import React from 'react'
import classes from './MeetupList.module.css'
import {DUMMY_DATA} from '../../dummyData/DummyData'
import MeetUpItem from '../MeetUpItem/MeetUpItem'


 const MeetupList = (props) => {

    return (
        <div>
          
            <ul className={classes.list}>
                {props.meetups.map(x => {
                    return(
                         <MeetUpItem items={x}  key={x.id} favourite={props.favourites}/> 
                       )
                })}
            </ul>
        </div>
    )
}

export default MeetupList