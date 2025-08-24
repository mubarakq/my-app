import { useState } from "react"

function State (){
    const [favourite, setFavourite] = useState(0)

    const movies = [
                    {name: 'Hitman', year: '2002'},
                    {name: 'DUN', year: '2012'}
                    ]
    return(
       <div>
        <p>{favourite}</p>
         <ul>
          { movies.map((movie, index)=> (<li key={index}>{movie.name} {movie.year} <button onClick={()=>setFavourite(favourite + 1)}>Add to fav</button></li>)) }
        </ul>
       </div>
    )
}
export default State


// import { useState } from "react"

// function State (){
//     const [count, setCount] = useState(5)
//     return(
//         <div>
//             <h1>Count Examples</h1>
//             <p>count: {count}</p>
//             <button onClick={()=> setCount(count + 1)}>Increase</button>
//             <button onClick={()=> setCount(5)}>Reset</button>
//             <button onClick={()=> setCount(count - 1)}>Decreese</button>
//         </div>
//     )
// }
// export default State