import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormComponent from './FormComponent';
import ListGroupComponent from './ListGroupComponent';
import TabComponent from './TabComponent';

function MainPage() {
  return (
    <Container>
        <h1>Assignment 1: Lamees Abdallah</h1>
        <br></br>
      <Row>
        <Col sm={4}>
        <FormComponent/>
        </Col>
        <Col sm={4}>
        <ListGroupComponent/>
        </Col>
        <Col sm={4}>
        <TabComponent/>
        </Col>
      </Row>
     
    </Container>
  );
}

export default MainPage;