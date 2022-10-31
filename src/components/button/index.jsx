import React from "react";
import * as St from "./styles.js" 


export  const Button = ({
label="Buscar",onClick})=>{


return(<St.Container>
    <St.Button 
    onClick={(e)=>onClick&&onClick(e)}
    >{label||""}</St.Button></St.Container>)

}

export default Button;