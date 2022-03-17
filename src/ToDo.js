import React from "react";

export default function ToDo({id, title, content, complete}) {
    function handleTodoClick(){
        console.log('Checkbox');
    }
    
    return(
        <div>
            <input type="checkbox" checked={complete} onChange={handleTodoClick}/>
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    )
}