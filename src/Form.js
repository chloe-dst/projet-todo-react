import React, { useState } from "react";

export default function Form({setTodos}) {
    const[newItem, setNewitem] = useState({complete : false})

    const handleChange = (e) => {
        const key = e.target.id;
        const value = e.target.value;
        setNewitem({...newItem,[key] : value})
    }

    function addTodo(e){
        e.preventDefault();
        setTodos(prev => [...prev, newItem]);
    }

    return(
        <div>
            <h2>Ajouter un élément : </h2>
            <form onSubmit={addTodo}>
                <label> Titre : 
                    <input type="text" name="title" id="title" onChange={handleChange}/>
                </label>
                <br></br>
                <label> Contenu : 
                    <input type="text" name="content" id="content" onChange={handleChange} />
                </label>
                <br></br>
                <button>Ajouter</button> 
            </form>
        </div>
    )
}