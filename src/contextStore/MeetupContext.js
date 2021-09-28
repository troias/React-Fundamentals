import React, { useState} from 'react'

export const MeetupContext = React.createContext({
    favourites: [], 
    favouriteAmount: 0,
    loading: false,
    addFavourites: (item) => {},
    removeFavouriteHandler: (id) => {},
    itemIsFavorite: (id) => {},
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
    const itemIsFavouriteHandler = (id) => {
        return favourites.some((x) => x.id === id)
    }

    const meetupContext = {
        favourites, 
        favouriteAmount: favourites.length,
        addFavourites: addFavouritesHandler,
        removeFavourite: removeFavouriteHandler,
        itemIsFavorite: itemIsFavouriteHandler
    }
   
    return (
        <MeetupContext.Provider value={meetupContext}>
            {props.children}
        </MeetupContext.Provider>
    )
}

export default MeetupContextProvider
