import axios from "axios";


export async function geAllMovie (){

    const API_URL = "https://ghibliapi.vercel.app/films"

    //MANEJO DE ERRORES

    try {
        const response = await axios.get(API_URL)
        console.log (response);
        return response.data

    } catch (error) {
        console.log("ups no se pudo mostrar la info", error)

    }

} 