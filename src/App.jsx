import Card from './card.jsx'
import Button from './button.jsx';
import Buttons from './Button2/Buttons.jsx';
import Buttonsm from './ButtonSm.jsx';
import Student from './Student.jsx';
import Header from './Header.jsx';
import Conditions from './Condition.jsx';
import List from './list.jsx'
import Listed from './Listed.jsx'
import State from './state.jsx';
import Classwork from './Classwork.jsx';
import Event from './Event.jsx';
import Light from './Light.jsx';
import Like from './Like.jsx';
import Evfun from './EveFunc.jsx';
function App () {

  const lowFoods =[
  {id: 1,
    name:"Eba",
    calories: 20},
  { id: 2,
    name:"Beans",
    calories: 34},
  { id: 3,
    name:"Pizza",
    calories: 120},
  { id: 4,
    name:"Burger",
    calories: 10}
];

const movies = [
  { title: "Inception", year: 2010 },
  { title: "Batman", year: 2008 },
];

  return (
  <>
    <Header/>
    <Card />
    <Card />
    <Button />
    <Buttons />
    <Buttonsm />
    <Student name= "Mubarak" age={50} isStudent={false} />
    <Student />
    <Conditions/>
    <Conditions name='Ola' isLogIn={true}/>
    <List/>
    <div>
      <Listed chop={lowFoods} />
    </div>
    <ul>
      {movies.map((movie, year)=> (<li>{movie.title} {movie.year}</li>))}
    </ul>
    <State />
    <Classwork />
    <Event /> <br /> <br />
    <Light/>
    <Like />
    <Evfun />
  </>
);

}
 
export default App
