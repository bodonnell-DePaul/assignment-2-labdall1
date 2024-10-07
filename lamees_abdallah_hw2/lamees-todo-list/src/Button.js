import Button from 'react-bootstrap/Button';
import './Button.css'
function ButtonComponent() {
  return (
    <div className="d-grid gap-2 ">
      <Button  as = "input" type="submit" value= "Add ToDo" variant="primary" size="lg">
      </Button>
    </div>
  );
}

export default ButtonComponent;