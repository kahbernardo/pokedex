import React, { useState } from "react";
import * as St from "./styles.js" 


export  const Input = ({
label="",
placeholder="Qual pokémon procura?",
state
,onChange})=>{
// const [localState,setLocalState]=useState(state||"")
const changeState=(value)=>{
    onChange(value)
}

return(<St.Container>
    <St.Input value={state}
    placeholder={placeholder||""}
    onChange={(e)=>changeState(e.target.value)}
    /></St.Container>)

}

export default Input;