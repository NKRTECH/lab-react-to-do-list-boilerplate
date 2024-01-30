import React, { Component } from "react";
import './App.css';

class TodoListApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      newTask: '',
    };
  }

  addTask = () => {
    this.setState({
      tasks: [...this.state.tasks, this.state.newTask],
      newTask: '',
    });
  };

  changeTask = (e) => {
    this.setState({ newTask: e.target.value });
  };

  deleteTask = (index) => {
    const { tasks } = this.state;
    const updatedTasks = tasks.filter((_, i) => i !== index);
    this.setState({ tasks: updatedTasks });
  };

  editTask = (index, e) => {
    const { value } = e.target;
    const newTasks = [...this.state.tasks];
    newTasks[index] = value;
    this.setState({ tasks: newTasks });
  };

  render() {
    const { tasks, newTask } = this.state;

    return (
      <div className='todo-container'>
        <h1>TO-DO List</h1>
        <div className='task-input'>
          <input
            type="text"
            value={newTask}
            placeholder='Enter the task'
            onChange={this.changeTask}
          />
          <button type='submit' onClick={this.addTask}>
            Add
          </button>
        </div>
        <div>
          {tasks.map((task, index) => (
            <div key={index} className='task-item'>
              <input
                type="text"
                value={task}
                onChange={(e) => this.editTask(index, e)}
              />
              <button type='submit' onClick={() => this.deleteTask(index)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default TodoListApp;
