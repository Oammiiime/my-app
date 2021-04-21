
import { Component } from "react";

class TodoList extends Component {
    constructor() {
      super();
      this.clickTodo = this.clickTodo.bind(this);
    }
  
    clickTodo(todo) {
       this.props.clickTodo(todo);
    }
  
    render() {
    
        const data = this.props.todos.map((todo) => {
         
            if (todo.isdone) {
                return <ul> <li key={todo.id}  onClick={() => this.clickTodo(todo)}>
                <s>{todo.name}</s>
              </li></ul>
            }
            else{
                return  <ul> <li key={todo.id}  onClick={() => this.clickTodo(todo)}>
                {todo.name}
              </li></ul>
            }
           
        });
         return <ul>{data}</ul>;
    }
  }
  
  export default TodoList;