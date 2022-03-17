import React, {useState} from "react";
import ToDo from "./ToDo";
import Form from "./Form";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1, 
      title:'Récupérer cours React', 
      content:'Récupérer cours React bla bla bla bla', 
      complete: false
    },
    {
      id: 2, 
      title:'Faire exercice React', 
      content:'Faire exercice React bla bla bla', 
      complete: false
    }
  ]);
  
  function toggleTodos(id){
    console.log('La checkbox a été cliqué');
  }

  return (
    <>
      <h1>Ma liste à faire</h1>
      <div>
        {todos.map( todos => (
          <ToDo title={todos.title} content={todos.content} key={Math.random()}/>
        ))}
        <Form setTodos={setTodos}/>
      </div>
    </>
  );
}

export default App;
