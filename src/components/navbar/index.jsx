import React,{useState} from "react";
import * as St from "./styles.js" 
import pokeLogo from "../../assets/images/pokedex_logo.png"
import Input from "../input/index.jsx";
import Button from "../button/index.jsx";


export  const NavBar = ({onChange,state})=>{
const [localState,setLocalState]=useState("")

return(<St.Container><St.ImageContainer src={pokeLogo}/>
<Input value={localState} onChange={setLocalState}/>
<Button onClick={()=>onChange(localState)}/>
</St.Container>)

}

export default NavBar;