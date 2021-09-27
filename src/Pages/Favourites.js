import React, {useState, useEffect} from 'react'

const Favourites = () => {
    const [favourites, setFavourites] = useState([])

    useEffect(() => {
        addInitialFavouritesHandler()
    }, [])

    const  addInitialFavouritesHandler = async () => {
        const req = await fetch("https://react-example-8a20f-default-rtdb.firebaseio.com/favourites.json")
        const res = await req.json()

        let favouriteData = []

        for (const i in res) {
            favouriteData.push(res[i])
        }
        console.log(favouriteData)
        setFavourites(favouriteData)
    }

    return (
        <div>
             <h1>Favourites</h1>
             {favourites.map(favourite => <li>{favourite.title}</li>)}
        </div>
    )
}

export  default Favourites