export const searchName = async(value)=>{
    try {
        console.log(111,value)
        let url = `https://pokeapi.co/api/v2/pokemon/${value}`

        const response = await fetch(url)
        return response

    } catch (error) {
        console.log("Erro: ",error)
    }
}