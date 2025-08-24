function Listed ({ chop }) {

    const listFoods = chop.map( (lowFood) => (
    <li key={lowFood.id} > 
    {lowFood.name}: &nbsp; {lowFood.calories}
    </li>
    ));

    return(
    <ul>{listFoods}</ul>
    )
}
export default Listed