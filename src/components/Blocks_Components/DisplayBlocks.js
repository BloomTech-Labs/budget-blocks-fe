import React from 'react';
import './index.css';

const DisplayBlocks = ({ arr, handleClick }) => {
	return (
		<tbody className='table-body'>
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
						<button
							id='edit-button'
							onClick={() => handleClick(i.id, i.budget)}
						>
							edit
						</button>
					</td>
				</tr>
			))}
		</tbody>
	);
};

export default DisplayBlocks;
