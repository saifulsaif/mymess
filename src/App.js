
import './App.css';

const Person = (props) =>{
  return (
   <>
   <h1>Name : {props.name}</h1>
   <h2>Last Name : {props.last_name} </h2>
   <h2>Age : {props.age} </h2>
   </>
  )
}

const App = () => {
  const name = 'saif';

  return (
    <div className="App">
       <Person name={'Rony'} last_name={'Kobir'} age={'23'} />
       <Person name='Joy' last_name='Khab' age='43' />

    </div>
  );
}

export default App;
