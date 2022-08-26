import React from 'react'
import {useState} from 'react'

export const GiftApp =() => {
    const [categorias, setCategoria] = useState(["Peliculas", "Musica", "Libros"])
    const handlerAdd =()=> setCategoria([...categorias, document.getElementById("Input").value]); 

    return(
        <>
            <h1>Gifts App</h1>
            <input type="text" id="Input" /> 
            <button onClick={handlerAdd}>Buscar</button>
            <ol>
                {categorias.map( categoria => {
                    return ( <li>{categoria}</li>)
                } )}
            </ol>
        </>
    )
}