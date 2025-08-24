import { useState } from "react";
function Classwork(){
    const [movies, setMovies] = useState(0);

    const myMovies = [  {TV:'AIT', title:'Super Story' },
                        {TV:'RSTV', title:'Face 2 Face' },
                        {TV:'NTA', title:'Papa Ajasco' },
                        {TV:'SilverBird', title:'This Life' } 
                    ]
    return (
        <>
            <p>Favour Movies: {movies}</p>
            <ul>
                {myMovies.map((movie, index)=>(<li key={index}>{movie.TV} {movie.title} <button onClick={()=>setMovies(movies + 1)}>Add to Fav</button></li>))}
            </ul>
        </>
    )
}
export default Classwork