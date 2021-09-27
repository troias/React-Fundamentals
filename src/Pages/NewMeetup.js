import React from 'react'
import MeetupForm from '../components/meet-ups/MeetUpForm/MeetupForm'
import { useHistory } from 'react-router-dom/'

 const NewMeetup = () => {

    const history = useHistory()

     const onAddMeetupHandler = async (item) => {
        const req = await fetch("https://react-example-8a20f-default-rtdb.firebaseio.com/meetups.json", {
            method: 'POST',
            body: JSON.stringify(item)

        })
        const res = await req.json
        history.push("/")
        // console.log(res)
     }

    return (
        <div>
             <h1>New Meetup Form</h1>
             <MeetupForm   onAddMeetup={onAddMeetupHandler} />
           
        </div>
    )
}

export default NewMeetup