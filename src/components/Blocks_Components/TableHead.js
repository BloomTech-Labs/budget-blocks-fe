import React from "react"; 
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

export const TableHeads = ({ CellNames, className = "table_names" }) =>{

    return(
        <TableHead>
          <TableRow className= {className}>
              {CellNames.map((name)=>(
                  <TableCell>{name}</TableCell>
              ))}
          </TableRow>
        </TableHead>
    )
}