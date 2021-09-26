import React from 'react'
import NavBar from '../navigation/NavBar'

 const Layout = (props) => {
    return (
        <div>
            <NavBar/>
            <main>
           {props.children} 
           </main>
        </div>
    )
}

export default Layout
