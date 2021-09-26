import React from 'react'
import classes from './MeetupList.module.css'
import {DUMMY_DATA} from '../../dummyData/DummyData'
import MeetUpItem from '../MeetUpItem/MeetUpItem'


 const MeetupList = () => {
    return (
        <div>
          
            <ul className={classes.list}>
                {DUMMY_DATA.map(x => {
                    return(
                         <MeetUpItem items={x}  key={x.id} /> 
                       )
                })}
            </ul>
        </div>
    )
}

export default MeetupList