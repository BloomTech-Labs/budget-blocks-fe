import React,{useEffect,useState} from 'react';
import styled from 'styled-components'
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import {Row,Col} from 'react-bootstrap'
import { Progress,Container,Table } from "reactstrap";
import "./table.css"
import axios from "axios"
  function DashboardBlocks (){
    let [categories,setCategories] = useState([])
    useEffect(() => {
      axios.get("https://lambda-budget-blocks.herokuapp.com/api/users/categories/1")
      .then(i => setCategories(i.data))
    },[])
    categories = categories.filter(i => i.id < 6)
    console.log(categories)
  return (
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
    {categories.map(i => (
      <tr key={i.id}>
        <td></td>
        <td>{i.category}</td>
        <td>
            <Progress value={i.id} />
       </td>
        <td>&#9989;</td>
        <td>$0.00</td>
        <td>$500.00</td>
        <td>Edit</td>
      </tr>
    ))}
    </tbody>
  </Table>

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

  