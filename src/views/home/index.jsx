import React, { useEffect, useState } from "react";
import * as St from "./styles.js"
import NavBar from "../../components/navbar/index.jsx";
import { searchName } from "../../services/pokeapi.js";

export const Home = () => {
    const [search,setSearch]=useState("")
    const [searchResult,setSearchResult]=useState("")

    useEffect(() => {
        console.log(131331,search)
        if(!search) return
        console.log(4444,searchName(search.toLowerCase()))
      }, [search]);
    
    return(<St.Container><NavBar state={search} onChange={setSearch}/></St.Container>)

    
}

export default Home;