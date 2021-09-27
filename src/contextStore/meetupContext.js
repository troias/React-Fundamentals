import React, { useState} from 'react'

export const MeetupContext = React.createContext({
    favourites: [], 
    favouriteAmount: 0,
    loading: false,
    addFavourites: (item) => {}
})
const MeetupContextProvider = (props) => {

    const [favourites, setFavourites] = useState([])
    const [favouriteAmount, setFavouriteAmount] = useState(0)

    const addFavouritesHandler = (item) => {
        setFavouriteAmount(prevState => {
            return prevState++})
   
        setFavourites((prevState) => {
            return prevState.concat(item)
        })
     
    }
    const removeFavouriteHandler = (id) => {
        setFavourites((prevState) => {
            return prevState.filter(x => x.id !== id)
        })
        setFavouriteAmount(prevState => {
            return prevState--})
    }

    const meetupContext = {
        favourites, 
        addFavourites: addFavouritesHandler,
        removeFavourite: removeFavouriteHandler,
        favouriteAmount,
    }
   
    return (
        <MeetupContext.Provider value={meetupContext}>
            {props.children}
        </MeetupContext.Provider>
    )
}

export default MeetupContextProvider
