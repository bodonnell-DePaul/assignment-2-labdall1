import ListGroup from 'react-bootstrap/ListGroup';
import { todos } from './todoItems';
import './ListGroupComponent';

function ListGroupComponent({ setActiveKey }) {

  const getVariant = (dueDate) => {
    const currentDate = new Date();
    const dueDateObj = new Date(dueDate);
    const diffTime = dueDateObj - currentDate;  
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));  
    // Follow the required logic:
    if (diffDays > 7) return 'primary';     // more than 7 days
    if (diffDays <= 7 && diffDays >= 4) return 'success';  // between 4 and 7 days
    if (diffDays < 4 && diffDays >= 2) return 'warning';   // between 2 and 4 days
    if (diffDays < 2) return 'danger';      // less than 2 days
  };

  return (
    <div>
      <ListGroup role="tablist">
        {todos.map((todo, index) => (
         <ListGroup.Item
         key={index}
         eventKey={index.toString()}
         onClick={() => setActiveKey(index.toString())}
         variant={getVariant(todo.dueDate)} 
         role="tab"
         className={`list-group-item-${getVariant(todo.dueDate)}`}  
       >
         <a 
           href="#"
           className={`list-group-item-${getVariant(todo.dueDate)}`} 
         >
           {todo.title}
         </a>
       </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default ListGroupComponent;
