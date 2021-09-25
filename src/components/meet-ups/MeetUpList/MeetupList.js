import React from 'react'
import classes from './MeetupList.module.css'
import {DUMMY_DATA} from '../../dummyData/DummyData'
import MeetUpItem from '../MeetUpItem/MeetUpItem'

 const MeetupList = () => {
    return (
        <div>
            <h1>All Meetups </h1>
            <ul>
                {DUMMY_DATA.map(x => {
                    return( <li key={x.id} className={classes.list}> <MeetUpItem items={x} /> </li> )
                })}
            </ul>
        </div>
    )
}

export default MeetupList