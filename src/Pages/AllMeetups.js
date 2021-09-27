import React, {useEffect, useState} from 'react'
import MeetupList from '../components/meet-ups/MeetUpList/MeetupList'


const AllMeetups = () => {

    const [meetups, setMeetups] = useState([])

    const initialMeetupHandler = async () => {
        const req = await fetch("https://react-example-8a20f-default-rtdb.firebaseio.com/meetups.json")
        const res = await req.json()

        let meetupData = []

        for (const i in res) {
            meetupData.push(res[i])
        }
        console.log(meetupData)
        setMeetups(meetupData)
     }

     const setFavouritesHandler = async (item) => {
        const req = await fetch("https://react-example-8a20f-default-rtdb.firebaseio.com/favourites.json", {
            method: 'POST',
            body: JSON.stringify(item), 
            headers: { 'Content-Type': 'application/json'}
        })
      
     }

    useEffect(() => {
        initialMeetupHandler()
        console.log("t")
    }, [])


    return (
        <section>
            <h1>All Meetups </h1>
            <MeetupList favourites={setFavouritesHandler} meetups={meetups} />
        </section>
    )
}

export default AllMeetups