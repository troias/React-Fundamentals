import React from 'react'
import classes from './MeetupForm.module.css'
import Card from '../../ui/card/Card'

const MeetupForm = () => {
    return (
        <Card>
            <form className={classes.form}>
                <div className={classes.control}>
                    <label htmlFor="title"> Meetup Title    </label>
                        <input type="text" name="" required  id="title" placeholder="Enter meetup name" />

                </div>
                <div className={classes.control}>
                    <label htmlFor="image"> Meetup Image   </label>
                        <input type="url" name="" required  id="image" placeholder="Enter meetup Image" />
                  
                </div>
                <div className={classes.control}>
                    <label htmlFor="Address"> Address   </label>
                        <input type="text" name="" required  id="Address" placeholder="Enter meetup Address" />
                  
                </div>
                <div className={classes.control}>
                    <label htmlFor="Description"> Description  </label>
                        <input type="text" name="" required  id="Description" placeholder="Enter meetup Description" />
                        <textarea name="" id="" cols="30" rows="10 "></textarea>
                </div>
                <br />
                <div className={classes.actions}>
                    <button>Submit</button>
                </div>
                
            </form>
        </Card>
    )
}

export default MeetupForm
