import React from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const DisplayBlocks = ({ arr, handleClick }) => {
	return (
		//     <TableBody>
		//     {arr.map(i => (
		//         <TableRow key={i.id}>
		//             <TableCell>{i.name}</TableCell>
		//             <TableCell>
		//                 ${i.total === null ? 0 : (Math.round(100 * i.total) / 100).toFixed(2)}
		//             </TableCell>
		//             <TableCell>
		//                 ${i.budget === null ? 0 : (Math.round(100 * i.budget) / 100).toFixed(2)}
		//             </TableCell>
		//             <TableCell onClick={()=>handleClick(i.id, i.budget)}>
		// 				Edit
		// 			</TableCell>
		//         </TableRow>
		//     ))}
		// </TableBody>
		<div className='table-body'>
			{arr.map(i => (
				<tr key={i.id}>
					<td>{i.name}</td>
					<td>
						$
						{i.total === null
							? 0
							: (Math.round(100 * i.total) / 100).toFixed(2)}
					</td>
					<td>
						$
						{i.budget === null
							? 0
							: (Math.round(100 * i.budget) / 100).toFixed(2)}
					</td>
					<td>
						<button onClick={() => handleClick(i.id, i.budget)}>edit</button>
					</td>
				</tr>
			))}
		</div>
	);
};

export default DisplayBlocks;
