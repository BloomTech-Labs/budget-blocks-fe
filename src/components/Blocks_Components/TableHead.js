
import React from 'react';
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

