// import './App.css';
// import React, { useRef, useEffect } from 'react';
// import { connect } from 'react-redux';
// import { addTask, deleteTask, editTask, toggleTask } from './actions/todoActions';
// import './index.css';

// function App({ tasks, addTask, deleteTask, editTask, toggleTask }) {
//   const myTaskInputRef = useRef(null);
//   const myAddTaskBtnRef = useRef(null);
//   const myTaskListRef = useRef(null);


//   useEffect(() => {
    
//     const taskInput = myTaskInputRef.current;
//     const addButton = myAddTaskBtnRef.current;
//     const taskList = myTaskListRef.current;
    
//     addButton.addEventListener("click", function() {

//       const taskText = taskInput.value;
    
//       if (taskText.trim() !== "") {
    
//         const taskItem = document.createElement("li");
    
//         taskItem.innerText = taskText;
    
//         taskItem.addEventListener("click", function() {
    
//           taskItem.remove();
    
//         });
    
//         taskList.appendChild(taskItem);
    
//         taskInput.value = "";
    
//       }
    
//     });
//   }, [addTask]);

//   return <div>
    
//     <div className="font-sans bg-gray-100 mx-auto max-w-screen-md bg-white p-4 rounded-lg shadow-md flex mb-4">

//         <input className="flex-grow rounded-lg p-2 text-base border-none shadow-sm" ref={myTaskInputRef} type="text" id="task-input" placeholder="Add new task" />
        

//         <button className="bg-indigo-600 text-white border-none px-4 py-2 rounded-lg cursor-pointer ml-4" ref={myAddTaskBtnRef}>Add</button>

//         <ul className="list-none p-0 m-0" ref={myTaskListRef} class="form">
          
//         </ul>
        

//       </div>




// </div>;
// }






import React from 'react';
import { connect } from 'react-redux';
import { addTask, deleteTask, editTask, toggleTask } from './actions/todoActions'; 

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTaskText: '',
      searchQuery: '', 
    };
  }

  handleInputChange = (e) => {
    this.setState({ newTaskText: e.target.value });
  };

  handleAddTask = () => {
    if (this.state.newTaskText.trim() !== '') {
      this.props.addTask(Date.now(), this.state.newTaskText);
      this.setState({ newTaskText: '' });
    }
  };

  handleDeleteTask = (taskId) => {
    this.props.deleteTask(taskId);
  };

  handleEditTask = (taskId, newText) => {
    const newTaskText = window.prompt('Enter new task text:');
    if (newTaskText !== null) {
      this.props.editTask(taskId, newTaskText);
    }
  };

  handleToggleTask = (taskId) => {
    this.props.toggleTask(taskId);
  };

  handleSearchChange = (e) => {
    this.setState({ searchQuery: e.target.value });
  };

  render() {
    const { searchQuery } = this.state;
    const filteredTasks = this.props.tasks.filter(task =>
      task.text.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
      <div className="font-sans bg-gray-100 mx-auto max-w-screen-md bg-white p-4 rounded-lg shadow-md flex mb-4">
        <input
          type="text"
          value={this.state.newTaskText}
          onChange={this.handleInputChange}
          placeholder="Add new task"
          className="flex-grow rounded-lg p-2 text-base border-none shadow-sm"
        />
        <button className="bg-indigo-600 text-white border-none px-4 py-2 rounded-lg cursor-pointer ml-4" onClick={this.handleAddTask}>Add</button>

       
        <input
          type="text"
          placeholder="Search tasks..."
          value={searchQuery}
          onChange={this.handleSearchChange}
          className="flex-grow rounded-lg p-2 text-base border-none shadow-sm ml-4"
        />

        <ul>
          {filteredTasks.map(task => (
            <li key={task.id}>
              <span>{task.text}</span>
              <button className="bg-indigo-600 text-white border-none px-4 py-2 rounded-lg cursor-pointer ml-4" onClick={() => this.handleDeleteTask(task.id)}>Delete</button>
              <button className="bg-indigo-600 text-white border-none px-4 py-2 rounded-lg cursor-pointer ml-4" onClick={() => this.handleEditTask(task.id)}>Edit</button>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => this.handleToggleTask(task.id)}
              />
            </li>
          ))}
        </ul>




        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks
  };
};

const mapDispatchToProps = {
  addTask,
  deleteTask,
  editTask,
  toggleTask
};

export default connect(mapStateToProps, mapDispatchToProps)(App);











// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       newTaskText: '' 
//     };
//   }

 
//   handleInputChange = (e) => {
//     this.setState({ newTaskText: e.target.value });
//   };

 
//   handleAddTask = () => {
//     if (this.state.newTaskText.trim() !== '') {
//       this.props.addTask(Date.now(), this.state.newTaskText); 
//       this.setState({ newTaskText: '' }); 
//     }
//   };


//   handleDeleteTask = (taskId) => {
//     this.props.deleteTask(taskId); 
//   };

  
//   handleEditTask = (taskId, newText) => {
//     const newTaskText = window.prompt('Enter new task text:'); 
//     if (newTaskText !== null) { 
//       this.props.editTask(taskId, newTaskText); 
//     }
//   };

  
//   handleToggleTask = (taskId) => {
//     this.props.toggleTask(taskId); 
//   };

//   render() {
//     return (
//       <div className="font-sans bg-gray-100 mx-auto max-w-screen-md bg-white p-4 rounded-lg shadow-md flex mb-4">
        
//         <input
//           type="text"
//           value={this.state.newTaskText}
//           onChange={this.handleInputChange}
//           placeholder="Add new task"
//           className="flex-grow rounded-lg p-2 text-base border-none shadow-sm"
//         />
//         <button className="bg-indigo-600 text-white border-none px-4 py-2 rounded-lg cursor-pointer ml-4" onClick={this.handleAddTask}>Add</button>

        
//         <ul>
//           {this.props.tasks.map(task => (
//             <li key={task.id}>
              
//               <span>{task.text}</span>
              
//               <button className="bg-indigo-600 text-white border-none px-4 py-2 rounded-lg cursor-pointer ml-4" onClick={() => this.handleDeleteTask(task.id)}>Delete</button>
              
//               <button className="bg-indigo-600 text-white border-none px-4 py-2 rounded-lg cursor-pointer ml-4" onClick={() => this.handleEditTask(task.id)}>Edit</button>
              
//               <input
//                 type="checkbox"
//                 checked={task.completed}
//                 onChange={() => this.handleToggleTask(task.id)}
//               />
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }



// const mapStateToProps = (state) => {
//   return {
//     tasks: state.tasks 
//   };
// };


// const mapDispatchToProps = {
//   addTask,
//   deleteTask,
//   editTask,
//   toggleTask
// };


// export default connect(mapStateToProps, mapDispatchToProps)(App);
