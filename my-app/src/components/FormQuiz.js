import { Component } from "react";

class FormQuiz extends Component {
    constructor() {
      super();
      this.state = { name: "" };
      this.doKey1 = this.doKey.bind(this);
    }
  
    doKey(event) {
      this.setState({ name: event.target.value });
    }
  
    sayHi() {
      this.props.onSayHi(this.state.name);
    }
  
    render() {
      return (
        <div>
          <input type="text" onKeyUp={this.doKey1} />
          <button onClick={() => this.sayHi()}>Add</button>
        </div>
      );
    }
  }
  
  export default FormQuiz;