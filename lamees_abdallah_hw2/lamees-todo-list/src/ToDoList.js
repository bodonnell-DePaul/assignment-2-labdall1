import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormComponent from './FormComponent';
import ListGroupComponent from './ListGroupComponent';
import TabComponent from './TabComponent';

function ToDoList() {
  const [activeKey, setActiveKey] = useState('0'); 

  return (
    <Container>
      {/* <h1>Assignment 2: Lamees's ToDo List</h1> */}
      <h1>Assignment 2: ToDo List</h1> 
      <h2>Lamees Abdallah</h2>
      <br />
      <Row>
        <Col sm={4}>
          <FormComponent />
        </Col>
        <Col sm={4}>
          <ListGroupComponent setActiveKey={setActiveKey} /> 
        </Col>
        <Col sm={4}>
          <TabComponent activeKey={activeKey} setActiveKey={setActiveKey} /> 
        </Col>
      </Row>
    </Container>
  );
}

export default ToDoList;
