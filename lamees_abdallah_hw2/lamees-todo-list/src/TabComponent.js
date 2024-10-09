import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import { todos } from './todoItems'; // This should be your todo items

function TabComponent({ activeKey }) {
  const [todoItems, setTodoItems] = useState(todos); // Create a state for todos

  // Function to handle description change
  const handleDescriptionChange = (e, index) => {
    const updatedTodos = [...todoItems];
    updatedTodos[index].description = e.target.innerText; // Update the description
    setTodoItems(updatedTodos);
  };

  // Function to handle due date change
  const handleDueDateChange = (e, index) => {
    const updatedTodos = [...todoItems];
    updatedTodos[index].dueDate = e.target.value; // Update the due date
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
                  <h4>{todo.title}</h4>

                  {/* Make description editable */}
                  <p
                    contentEditable
                    suppressContentEditableWarning={true} // Suppresses the warning
                    onBlur={(e) => handleDescriptionChange(e, index)} // Save changes on blur (when the user clicks away)
                  >
                    {todo.description}
                  </p>

                  {/* Date input for due date */}
                  <label><strong>Due Date: </strong></label>
                  <input
                    type="date"
                    value={todo.dueDate}
                    onChange={(e) => handleDueDateChange(e, index)} // Update due date on change
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

// import { useState } from 'react';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import Tab from 'react-bootstrap/Tab';
// import { todos } from './todoItems';

// function TabComponent({ activeKey }) {
//   const [todoItems, setTodoItems] = useState(todos); // Create a state for todos

//   // Function to handle description change
//   const handleDescriptionChange = (e, index) => {
//     const updatedTodos = [...todoItems];
//     updatedTodos[index].description = e.target.innerText; // Update the description
//     setTodoItems(updatedTodos);
//   };

//   // Function to handle due date change
//   const handleDueDateChange = (e, index) => {
//     const updatedTodos = [...todoItems];
//     updatedTodos[index].dueDate = e.target.value; // Update the due date
//     setTodoItems(updatedTodos);
//   };

//   return (
//     <div>
//       <Tab.Container id="left-tabs-example" activeKey={activeKey}>
//         <Row>
//           <Col sm={9}>
//             <Tab.Content>
//               {todoItems.map((todo, index) => (
//                 <Tab.Pane eventKey={index.toString()} key={index}>
//                   <h4>{todo.title}</h4>

//                   {/* Make description editable */}
//                   <p
//                     contentEditable
//                     suppressContentEditableWarning={true}  // Suppresses the warning
//                     onBlur={(e) => handleDescriptionChange(e, index)}  // Save changes on blur (when the user clicks away)
//                   >
//                     {todo.description}
//                   </p>

//                   {/* Date input for due date */}
//                   <label><strong>Due Date: </strong></label>
//                   <input
//                     type="date"
//                     value={todo.dueDate}
//                     onChange={(e) => handleDueDateChange(e, index)}  // Update due date on change
//                   />
//                 </Tab.Pane>
//               ))}
//             </Tab.Content>
//           </Col>
//         </Row>
//       </Tab.Container>
//     </div>
//   );
// }

// export default TabComponent;ß