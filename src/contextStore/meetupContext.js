import React, { useState} from 'react'

export const MeetupContext = React.createContext({
    favourites: [], 
    favouriteAmount: 0,
    loading: false,
    addFavourites: (item) => {},
    removeFavouriteHandler: (id) => {}
})

const MeetupContextProvider = (props) => {
 
    const [favourites, setFavourites] = useState([])
    const addFavouritesHandler = (item) => {
    
        setFavourites((prevState) => {
            return prevState.concat(item)
        })
     
    }
    const removeFavouriteHandler = (id) => {
        setFavourites((prevState) => {
            return prevState.filter(x => x.id !== id)
        })
    
    }

    const meetupContext = {
        favourites, 
        addFavourites: addFavouritesHandler,
        removeFavourite: removeFavouriteHandler,
        favouriteAmount: favourites.length,
    }
   
    return (
        <MeetupContext.Provider value={meetupContext}>
            {props.children}
           {console.log(meetupContext.favouriteAmount) }
        </MeetupContext.Provider>
    )
}

export default MeetupContextProvider
