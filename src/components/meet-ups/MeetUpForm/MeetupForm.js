import React from 'react'
import classes from './MeetupForm.module.css'

const MeetupForm = () => {
    return (
        
            <form className={classes.form}>
                <div className={classes.control}>
                    <label htmlFor="label">
                        lavbel
                    </label>
                    <input type="text" name="" id="" />
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
                <br/>
                <div className={classes.actions}>
                    <button>Submit</button>
                </div>
            </form>
 
    )
}

export default MeetupForm
