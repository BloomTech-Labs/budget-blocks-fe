
import React from 'react';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import '../../index.css';
import './index.css';

export const TableHeads = ({ CellNames, className = 'table_names' }) => {
	return (	
		<thead>
			<tr className='table-header'>
				{CellNames.map(name => (
					<th key={name}>{name}</th>
				))}
			</tr>
		</thead>	
	);
};

