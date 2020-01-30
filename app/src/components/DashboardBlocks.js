import React,{useEffect,useState} from 'react';
import styled from 'styled-components'
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import {Row,Col} from 'react-bootstrap'
import { Progress,Container,Table } from "reactstrap";
import "./table.css"
// import DashboardBlocks from "./DashboardBlocks"
  function DashboardBlocks (){
      const array = [
          {
              name:"hello",
              age:21,
              height:"6'11",
              id:1
          },
          {
            name:"hello",
            age:21,
            height:"6'11",
            id:2
        },
        {
            name:"hello",
            age:21,
            height:"6'11",
            id:3
        }
      ]
    
  return (
      <div>
          {array.map(i => (
              <div key={i.id}>
              <Table responsive>
              <thead>
                <tr>
                  <th></th>
                  <th>Block</th>
                  <th>Current status</th>
                  <th></th>
                  <th>Total Expenses</th>
                  <th>Limit</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                  <thead>
                      <tr>
                          <th></th>
                          <th>{i.name}</th>
                      </tr>
                      </thead>
                      </tbody>
                  </Table>
                  </div>
          ))}
      </div>
  )
        }
export default DashboardBlocks
//   <Table responsive>
//   <thead>
//     <tr>
//       <th></th>
//       <th>Block</th>
//       <th>Current status</th>
//       <th></th>
//       <th>Total Expenses</th>
//       <th>Limit</th>
//       <th>Action</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <td></td>
//       <td>Title</td>
//       <td>
//           <Progress value={90} />
//      </td>
//       <td>&#9989;</td>
//       <td>$0.00</td>
//       <td>$500.00</td>
//       <td>Edit</td>
//     </tr>
//     <tr>
//       <td></td>
//       <td>Title</td>
//       <td>
//           <Progress value={90} /></td>
//       <td>&#9989;</td>
//       <td>$0.00</td>
//       <td>$500.00</td>
//       <td>Edit</td>
//     </tr>
//     <tr>
//       <td></td>
//       <td>Title</td>
//       <td>
//           <Progress value={90} /></td>
//       <td>&#9989;</td>
//       <td>$0.00</td>
//       <td>$500.00</td>
//       <td>Edit</td>
//     </tr>
//   </tbody>
// </Table>)
    //   }

  