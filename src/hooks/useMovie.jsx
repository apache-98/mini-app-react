// logica de el componente de productos ## muestra las peliculas
import { useEffect, useState } from "react"
import { geAllMovie } from "../services/movieService.js"


 export function useMovie(){

    const [movie, setMovie] = useState([])


// hagame la peticion - asincronica- guarde la respuesta en la variable de estado
    async function fetchMovie() {


// manejo de errores
        try {
            const data = await geAllMovie();
            setMovie(data)
        }catch(e){
            console.error("error inesperado", e)
        }
    }
// cuando se cargue por primera vez el componente, active la funcion para hacer la peticion
    useEffect(() =>{
        fetchMovie();
    },[])

    return{
        movie,

    }
}