import React,{useContext} from 'react'
import NavBar from '../navigation/NavBar'
import MeetupContext from '../../contextStore/meetupContext'

 const Layout = (props) => {
    const ctx = useContext(MeetupContext)
   

    return (

        <div>
            <NavBar/>
           {props.children} 
        </div>
    )
}

export default Layout
