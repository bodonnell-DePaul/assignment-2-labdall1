import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import { todos } from './todoItems'; 

function TabComponent({ activeKey }) {
  const [todoItems, setTodoItems] = useState(todos); 

  const handleDescriptionChange = (e, index) => {
    const updatedTodos = [...todoItems];
    updatedTodos[index].description = e.target.innerText; 
    setTodoItems(updatedTodos);
  };

  const handleDueDateChange = (e, index) => {
    const updatedTodos = [...todoItems];
    updatedTodos[index].dueDate = e.target.value; 
    setTodoItems(updatedTodos);
  };

  return (
    <div>
      <Tab.Container id="todo-list-tabs" activeKey={activeKey}>
        <Row>
          <Col sm={12}>
            <Tab.Content>
              {todoItems.map((todo, index) => (
                <Tab.Pane
                  eventKey={index.toString()}
                  key={index}
                  role="tabpanel"
                >
                  
                  <p
                    contentEditable
                    suppressContentEditableWarning={true} 
                    onBlur={(e) => handleDescriptionChange(e, index)} 
                  >
                    {todo.description}
                  </p>

                  <label><strong>Due Date: </strong></label>
                  <input
                    type="date"
                    value={todo.dueDate}
                    onChange={(e) => handleDueDateChange(e, index)} 
                  />
                </Tab.Pane>
              ))}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}

export default TabComponent;
