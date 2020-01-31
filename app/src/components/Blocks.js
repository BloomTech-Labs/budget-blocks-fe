import React,{useEffect,useState} from 'react';
import styled from 'styled-components'
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import {Row,Col} from 'react-bootstrap'
import { Progress,Container,Table } from "reactstrap";
import "./table.css"
import axios from "axios"
import immutable from "immutable"
  function DashboardBlocks (){
    let [categories,setCategories] = useState([])
    const [click,setClick] = useState(false)
    const [filter,setFilter] = useState([])
    const[results,setResults] = useState([])

    useEffect(() => {
      axios.get("https://lambda-budget-blocks.herokuapp.com/api/users/categories/1")
      .then(i => {
          setCategories(i.data)
         setFilter(i.data.slice(Math.max(i.data.length - 5, 1)))
      })
    },[])
    
    console.log(filter)
    const handleClick = () => {
        setClick(!click
    }
    console.log(categories)
    
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
        {click ? 
    filter.map(i => (
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
    )) :
    categories.map(i => (
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
    <button onClick={handleClick}>{click ? "View All" :"View Less"}</button>
  </Table>
  )
        }
export default DashboardBlocks
