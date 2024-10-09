import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormComponent from './FormComponent';
import ListGroupComponent from './ListGroupComponent';
import TabComponent from './TabComponent';

function ToDoList() {
  const [activeKey, setActiveKey] = useState('0'); // Default active key is '0'

  return (
    <Container>
      <h1>Assignment 2: Lamees's ToDo List</h1>
      <br />
      <Row>
        <Col sm={4}>
          <FormComponent />
        </Col>
        <Col sm={4}>
          <ListGroupComponent setActiveKey={setActiveKey} /> {/* Pass setActiveKey */}
        </Col>
        <Col sm={4}>
          <TabComponent activeKey={activeKey} setActiveKey={setActiveKey} /> {/* Pass activeKey and setActiveKey */}
        </Col>
      </Row>
    </Container>
  );
}

export default ToDoList;

// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import FormComponent from './FormComponent';
// import ListGroupComponent from './ListGroupComponent';
// import TabComponent from './TabComponent';

// function MainPage() {
//   return (
//     <Container>
//         <h1>Assignment 1: Lamees Abdallah</h1>
//         <h1></h1>
//         <br></br>
//       <Row>
//         <Col sm={4}>
//         <FormComponent/>
//         </Col>
//         <Col sm={4}>
//         <ListGroupComponent/>
//         </Col>
//         <Col sm={4}>
//         <TabComponent/>
//         </Col>
//       </Row>
     
//     </Container>
//   );
// }

// export default MainPage;