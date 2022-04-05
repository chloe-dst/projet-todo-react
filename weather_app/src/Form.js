import react from "react";

function checkCity(e){
    e.preventDefault();
}

export default function Form() {
    return(
        <div>
            <h2>Chercher une ville : </h2>
            <form onSubmit={checkCity}>
                <input type="text" name="city" id="city"/>
                <br></br>
                <button>Valider</button> 
            </form>
        </div>
    )
}