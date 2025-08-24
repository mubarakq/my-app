import { useState } from "react";

function Like () {

    const [likeMovies, setLike] = useState([])
    const Movies = [
                    {id : 1, name : 'Baby Day Out' },
                    {id : 2, name : 'Daddy Day Care' },
                    {id : 3, name : 'Little Stout' },
                    {id : 4, name : 'Home Alone' },
                    {id : 5, name : 'Drumline' },
                    {id : 6, name : 'High school Musical' },
                    {id : 7, name : 'Street Dance' }
                    

                    ]

                    function like (movie){
                        if(!likeMovies.some(fav => fav.name === movie.name)){
                            setLike([...likeMovies, movie])
                        }
                    }

    return(
        <>
            <h2>My Movies 🎬</h2>
            <p> Total Likes: {likeMovies.length}</p>
            <ul>
                {
                    Movies.map(movie => (<li key={movie.id}>{movie.name} <button onClick={()=>like(movie)}>Add to Fav</button></li>))
                }
            </ul>
            {/* <h3>{likeMovies.length> 0 ? 'Favour Movies' : null}</h3> */}
            {likeMovies.length > 0 && <h3>Your Favour Movies</h3> }

            
            <ul>
                {
                    likeMovies.map(likeMovie => (<li key={likeMovie.id}>{likeMovie.name} </li>))
                }
            </ul>
        </>
    )
}

export default Like