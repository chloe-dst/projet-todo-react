import react from "react";

export default function MeteoDisplay({location}) {
    const thenDataSet = () => {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+{location}+"&appid=588c2db74e533d008c1633554f9ce0f0")
            .then(response => response.json())
            .then(json => console.log(json))
    }

    return(
        <div>
            <p></p>
        </div>
    )
}