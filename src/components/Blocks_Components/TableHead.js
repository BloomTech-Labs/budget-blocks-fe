import React from "react"; 

export const TableHeads = ({ CellNames }) =>{

    return(
        <tr>
              {CellNames.map((name)=>(
                  <th key={name}>{name}</th>
              ))}
        </tr>
    )
}