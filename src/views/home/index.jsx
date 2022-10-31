import React, { useEffect, useState } from "react";
import * as St from "./styles.js"
import NavBar from "../../components/navbar/index.jsx";

export const Home = () => {
    const [search,setSearch]=useState("")

    useEffect(() => {
        console.log(131331,search)
        
      }, [search]);
    
    return(<St.Container><NavBar state={search} onChange={setSearch}/></St.Container>)

    
}

export default Home;