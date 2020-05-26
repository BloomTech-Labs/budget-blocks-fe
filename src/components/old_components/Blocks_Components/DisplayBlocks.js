import React from 'react';
import './index.css';
import { connect } from 'react-redux';

import DeleteBlockModal from "./DeleteBlockModal";

const DisplayBlocks = ({ arr, handleClick }) => {
  // This components maps through the blocks and displays them on the table.
  // the arr is the array of blocks that are to be displayed.
  // the handleClick is a function from LinkedBlocks. it displays and populates the modal to edit the block with the info from the block clicked
  // new categories have a default of null for budget and total. if they are null then it will display as 0.
  // total refers to the total amount of money spent. (Transactions tied to that block added together)
  // budget refers to the limit of the block
  return (
    <tbody className="table-body">
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
            <DeleteBlockModal blockID={i.id} />
            <button
              id="edit-button"
              onClick={
                () => {
                  handleClick(i.id, i.budget)
                }
              }
            >
              edit
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

function mapStateToProps(state) {
  return {
    userID: state.loginReducer.user.id,
    blocks: state.plaidReducer.categories
  };
}

export default connect(mapStateToProps)(DisplayBlocks);
