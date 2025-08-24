
function Conditions ({name="Guest", isLogIn=false}){
    return(
        <div>
       <div>{name} is  {isLogIn?<h2 className="login">Online</h2>: <h2 className="logOut">Offline</h2>}</div>
        </div>
    )
}
export default Conditions