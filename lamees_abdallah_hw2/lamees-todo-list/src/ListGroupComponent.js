import ListGroup from 'react-bootstrap/ListGroup';
import { todos } from './todoItems';

function ListGroupComponent({ setActiveKey }) {

  // Function to get color variant based on due date
  const getVariant = (dueDate) => {
    const currentDate = new Date();
    const dueDateObj = new Date(dueDate);
    const diffTime = dueDateObj - currentDate;  // Time difference in milliseconds
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));  // Convert to days

    // Follow the required logic:
    if (diffDays > 7) return 'primary';     // more than 7 days
    if (diffDays <= 7 && diffDays >= 4) return 'success';  // between 4 and 7 days
    if (diffDays < 4 && diffDays >= 2) return 'warning';   // between 2 and 4 days
    if (diffDays < 2) return 'danger';      // less than 2 days
  };

  return (
    <div>
      {/* Add role="tablist" here */}
      <ListGroup role="tablist">
        {todos.map((todo, index) => (
          <ListGroup.Item
            key={index}
            eventKey={index.toString()}
            onClick={() => setActiveKey(index.toString())}
            role="tab"
          >
            <a
              href="#"
              className={`list-group-item-${getVariant(todo.dueDate)}`} // Apply the class to the <a> tag
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
// import ListGroup from 'react-bootstrap/ListGroup';
// import { todos } from './todoItems';

// function ListGroupComponent({ setActiveKey }) {

//   // Function to get color variant based on due date
//   const getVariant = (dueDate) => {
//     const currentDate = new Date();
//     const dueDateObj = new Date(dueDate);
//     const diffTime = dueDateObj - currentDate;  // Time difference in milliseconds
//     const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));  // Convert to days

//     // Follow the required logic:
//     if (diffDays > 7) return 'primary';     // more than 7 days
//     if (diffDays <= 7 && diffDays >= 4) return 'success';  // between 4 and 7 days
//     if (diffDays < 4 && diffDays >= 2) return 'warning';   // between 2 and 4 days
//     if (diffDays < 2) return 'danger';      // less than 2 days
//   };

//   return (
//     <div>
//       <ListGroup>
//         {todos.map((todo, index) => (
//           <ListGroup.Item
//             key={index}
//             eventKey={index.toString()}
//             onClick={() => setActiveKey(index.toString())}
//             variant={getVariant(todo.dueDate)}  // Apply variant based on due date
//           >
//             {todo.title}
//           </ListGroup.Item>
//         ))}
//       </ListGroup>
//     </div>
//   );
// }

// export default ListGroupComponent;