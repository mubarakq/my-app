import { useState } from "react";

function Event() {
    const [logIn, setIsLogIn] = useState(false);

    const isToggleLogin = ()=>{
        setIsLogIn(!logIn);
    };
    
    return(
        <>
            <h1>{logIn ? 'Welcome' : 'Please Login'}</h1>

            <button onClick={isToggleLogin}>
                {logIn ? 'LogOut' : 'Login'}
            </button>
        </>
    )
}
    export default Event





    
    // function Event({isLogIn}) {
    
    //         if(isLogIn){
    //            return( <h1>Welcome ola</h1>)
    //         } else{
    //            return( <h1>pls login</h1>)
    //         }
    // }
    // export default Event