import { Component } from "react";
import FormQuiz from "./components/FormQuiz";
import TodoList from "./components/TodoList";
import CountTasks from "./components/CountTasks";
class AppQuiz extends Component {

 todos = [
  ];

  constructor() {
    super();
    this.state = { todos: [] };
    this.xyz = this.xyz.bind(this);
    this.clickTodo = this.clickTodo.bind(this);
    var i = 0
  }

  // Callback
 
  xyz(input) {
    this.i = input.id + 1
    this.todos.push( { id: this.i, name: input, isdone: false } )
    this.setState({ todos: this.todo });
    
  }

  clickTodo(todo){
    if (todo.isdone) {
        todo.isdone = false 
    }else{
        todo.isdone = true 
    }
    this.todos[todo.id] = todo
    this.setState({ todos: this.todo });
  }

  render() {
    return (
      <div>
        <FormQuiz onSayHi={this.xyz} />
        <CountTasks todos={this.todos}/>
        <TodoList todos={this.todos} clickTodo = {this.clickTodo}/>
      </div>
    );
  }
}

export default AppQuiz;