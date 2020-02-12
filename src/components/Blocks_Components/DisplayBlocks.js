import React from "react";
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const DisplayBlocks = ({arr}) =>{

    return(
        <TableBody>
        {arr.map(i => (
            <TableRow key={i.id}>
                <TableCell>{i.name}</TableCell>
                <TableCell>
                    ${i.total === null ? 0 : Math.round(100 * i.total) / 100}
                </TableCell>
                <TableCell>
                    $
                    {i.budget === null ? 0 : Math.round(100 * i.budget) / 100}
                </TableCell>
                <TableCell>
                    <a href='google.com'>Edit</a>
                </TableCell>
            </TableRow>
        ))}
    </TableBody> 
    )
}

export default DisplayBlocks