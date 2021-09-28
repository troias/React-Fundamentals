import React, { useEffect, useState } from 'react'

import MeetupList from '../components/meet-ups/MeetUpList/MeetupList'


const AllMeetups = () => {
    const [meetups, setMeetups] = useState([])
    const [loading, setIsLoading] = useState(false)

    const initialMeetupHandler = async () => {


        try {
            setIsLoading(true)
            const req = await fetch("https://react-example-8a20f-default-rtdb.firebaseio.com/meetups.json")
            const res = await req.json()

            let meetupData = []

            for (const i in res) {
                const meetup = {
                    id: i,
                    ...res[i]
                }
                meetupData.push(meetup)

            }

           
            setMeetups(meetupData)
        } catch (error) {
            setIsLoading(false)
        }
        setIsLoading(false)

    }


    useEffect(() => {
        initialMeetupHandler()
    }, [])


    return (
        <section>
            <h1>All Meetups </h1>
            {loading && "Loading meetups..."}
            {!loading && <MeetupList  meetups={meetups} />}
        </section>
    )
}

export default AllMeetups