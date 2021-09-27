import React, { useRef } from 'react'
import classes from './MeetupForm.module.css'
import Card from '../../ui/card/Card'

const MeetupForm = (props) => {

    const meetupTitleRef = useRef()
    const meetupAddressRef = useRef()
    const meetupImageRef = useRef()
    const meetupDescriptionRef = useRef()
    const meetupTextRef = useRef()

    const newMeetupFormHandler = (event) => {

        event.preventDefault()

        const enteredTitle = meetupTitleRef.current.value
        const enteredAddress = meetupAddressRef.current.value
        const enteredImage = meetupImageRef.current.value
        const enteredDescription = meetupDescriptionRef.current.value
        const enteredText = meetupTextRef.current.value

        const newmeetups = {
            title: enteredTitle,
            address: enteredAddress,
            image: enteredImage,
            description: enteredDescription,
            data: enteredText
        }
      
        props.onAddMeetup(newmeetups);
    }
    return (
        <Card>
            <form className={classes.form} onSubmit={newMeetupFormHandler}>

                <div className={classes.control}>
                    <label htmlFor="title"> Meetup Title    </label>
                    <input
                        type="text"
                        ref={meetupTitleRef}
                        name=""
                        required id="title"
                        placeholder="Enter meetup name"
                    />

                </div>
                <div className={classes.control}>
                    <label htmlFor="image"> Meetup Image   </label>
                    <input
                        type="url"
                        name=""
                        ref={meetupImageRef}
                        required id="image"
                        placeholder=""
                    />

                </div>
                <div className={classes.control}>
                    <label htmlFor="Address"> Address   </label>
                    <input
                        type="text"
                        name=""
                        required
                        ref={meetupAddressRef}
                        id="Address"
                        placeholder="Enter meetup Address"
                    />

                </div>
                <div className={classes.control}>
                    <label htmlFor="Description"> Description  </label>
                    <input
                        type="text"
                        name=""
                        required ref={meetupDescriptionRef}
                        id="Description"
                        placeholder="Enter meetup Description"
                    />
                    <textarea
                        name=""
                        id="Description"
                        cols="30"
                        ref={meetupTextRef}
                        required
                        rows="5 "
                    />
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
