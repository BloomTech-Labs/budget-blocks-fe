import React,{useEffect,useState} from 'react';
import { connect } from "react-redux";
import styled from 'styled-components'
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import {Row,Col} from 'react-bootstrap'
import { Progress,Container,Table } from "reactstrap";
import './table.css';
import LinkedComponent from "./Balance/LinkedComponent";
import UnlinkedComponent from "./Balance/UnlinkedComponent";
function Dashboard(props) {
 const Div = styled.div`
background-color:lightgrey;
padding:25px;
`
const GreenButton = styled.button`
width: 2.5rem; 
height: 2.5rem;
border-radius: 50%;
background-color:lightgreen;
border-color:lightgreen;
font-size:1.2rem;
color:white;
margin-left:2rem;
`
const RedButton = styled.button`
width: 2.5rem; 
height: 2.5rem;
border-radius: 50%;
background-color:red;
border-color:red;
font-size:1.2rem;
color:white;
margin-left:2rem;
` 

function AddBalance(){
  if(props.LinkedAccount){
    return(<LinkedComponent/>)
  }else{
    return(<UnlinkedComponent/>)
  }
}
  return (
   
   <Container>
  <Row >
    <Col sm={9}> <div>
    <Div>
      <Row>
      <Col sm={8}> <h1>Hi, First Name </h1><p>Ksharper@studentmba.org</p> </Col>
      <Col sm={4}>KS</Col>
      </Row>   
  </Div>
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
    <tr>
      <td></td>
      <td>Title</td>
      <td>
          <Progress value={90} />
     </td>
      <td>&#9989;</td>
      <td>$0.00</td>
      <td>$500.00</td>
      <td>Edit</td>
    </tr>
    <tr>
      <td></td>
      <td>Title</td>
      <td>
          <Progress value={90} /></td>
      <td>&#9989;</td>
      <td>$0.00</td>
      <td>$500.00</td>
      <td>Edit</td>
    </tr>
    <tr>
      <td></td>
      <td>Title</td>
      <td>
          <Progress value={90} /></td>
      <td>&#9989;</td>
      <td>$0.00</td>
      <td>$500.00</td>
      <td>Edit</td>
    </tr>
  </tbody>
</Table>
  </div></Col>
    <Col sm={3}> <div>
      <Div>
    <Container>
        <div className="center">
          <h3>Total Budget</h3>
          <h3>$200.00</h3>
          <Progress value={90} />
        </div>
      </Container>
  <div className="buttons">
 
    <div className="green-button">
    <Row>
      <Col sm={6}><b>+$1250.67</b><h5>Income</h5><GreenButton>+</GreenButton></Col><Col sm={6}><b>-$567.56</b><h5>Expenses</h5><RedButton>-</RedButton></Col>
    </Row>
    {/* <Row>
      <Col sm={6}><h5>Income</h5></Col><Col sm={6}><h5>Expenses</h5></Col>
    </Row> */}
   
   
  </div>
 
      </div>
      </Div>
      <div className="subheading">
      <Row>
        {AddBalance()}
      </Row>
      </div>
      <div>
      <div className="subheading">
      <Row>
        <Col sm={9}>Upcoming Due Dates </Col>
      </Row>
      <Row>
        <Col sm={7}><p>Rent</p></Col><Col sm={3}><p>-$760.00</p><p>03/01/2020</p></Col>
      </Row>
      </div>
      </div>
</div></Col>
  </Row>
  
  <Row>
    <Col sm={9}> 
    <h2>Recent Transactions</h2>
    <Div className="border">
    <Row>
      <Col sm={9}>Purchase Authorized on 01/01 Storage Comapany for User </Col>
      
    </Row>
    <Row>
      <Col sm={9}><p>01/01/2020</p></Col><Col sm={3}><p>-$50.00</p></Col>
    </Row>
    <Row>
      <Col sm={9}><p>Category</p></Col><Col sm={3}><p>Utilities</p></Col>
    </Row>
    </Div>
    <Div className="border">
    <Row>
      <Col sm={9}>Purchase Authorized on 01/01 Storage Comapany for User </Col>
      
    </Row>
    <Row>
      <Col sm={9}><p>01/01/2020</p></Col><Col sm={3}><p>-$50.00</p></Col>
    </Row>
    <Row>
      <Col sm={9}><p>Category</p></Col><Col sm={3}><p>Utilities</p></Col>
    </Row>
    </Div>
    </Col>
    <Col sm={3}><div className="subheading">  <Row>
      <Col sm={10}><p>Savings Goals</p></Col>
    </Row>
    <Row>
      <Col sm={7}><p>Emergency Funds</p></Col><Col sm={3}><p>$2750.00</p><p>01/01/2020</p></Col>
    </Row>
    </div>
    </Col>
  </Row>
</Container> 
  
  );
}

function mapStateToProps(state){
  return {
      LinkedAccount: state.loginReducer.user.LinkedAccount
  }
}

export default connect(mapStateToProps,{})(Dashboard)