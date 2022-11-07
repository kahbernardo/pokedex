import axios from "axios"

export const searchName = async(value)=>{
    try {
        console.log(111,value)
        let url = `https://pokeapi.co/api/v2/pokemon/${value}`

        const response = await axios.get(url)
        console.log(454545,response.data)
        return response.data

    } catch (error) {
        console.log("Erro: ",error)
    }
}