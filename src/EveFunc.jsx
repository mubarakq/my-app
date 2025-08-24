function Evfun (){

    function handClick (e){
        e.target.textContent = 'Ouch🤕';
    }

return(
    <button onDoubleClick={(e)=>{handClick(e)}}>Click me😁</button>
)
}
export default Evfun