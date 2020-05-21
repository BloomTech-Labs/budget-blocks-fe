
import React from 'react';
import '../../index.css';
import './index.css';

export const TableHeads = ({ CellNames }) => {
	// This component creates a row of headers for the LinkedBlocks table
	// CellNames is an array of all the header names (strings)
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

