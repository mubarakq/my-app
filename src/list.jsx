function List (){ 
// const fruits = ["Grape","Apple", "Banana", "Orange", "Pear"]
// fruits.sort()
// const listFruit = fruits.map(fruit => <li>{fruit}</li>);

const foods =[
{
    id: 1,
    name:"Eba",
    calories: 20
},
 {
    id: 2,
    name:"Beans",
    calories: 34
},
 {
    id: 3,
    name:"Pizza",
    calories: 120
},
 {
    id: 4,
    name:"Burger",
    calories: 10
}
];
// for reverse change a to b(swap position)
// foods.sort((a, b) => a.name.localeCompare(b.name));
// foods.sort((a, b) => a.calories- b.calories);
// using filter 
 const lowFoods = foods.filter(food => food.calories < 100);

// const listFood = foods.map(food => <li key={food.id}>{food.name}: &nbsp; {food.calories}</li>);

const listFoods = lowFoods.map( lowFood => <li key={lowFood.id}>{lowFood.name}: &nbsp; {lowFood.calories}</li>);
return(
    // <ul>{listFruit}</ul>,
    <ul>{listFoods}</ul>
)
}
export default List