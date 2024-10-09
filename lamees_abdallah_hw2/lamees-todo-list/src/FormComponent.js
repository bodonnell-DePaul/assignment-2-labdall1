import Form from 'react-bootstrap/Form';
import ButtonComponent from './Button';
import './FormComponent.css';

function FormComponent() {
  return (
    <div>
      <Form className='form-container'>
      <Form.Group className="mb-3" controlId="formComponent.ControlInput1">
        <Form.Label>ToDo Item</Form.Label>
        <Form.Control type="text" placeholder="Add todo item" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formComponent.ControlTextarea1">
        <Form.Label>Due Date</Form.Label>
        <Form.Control type="date" placeholder="mm/dd/yyyy" />
      </Form.Group>
      <ButtonComponent/>
      
    </Form>

    </div>

    
  );
}

export default FormComponent;