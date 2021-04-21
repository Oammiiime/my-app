import { Component } from "react";

class CountTask extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.todos);
    const data = this.props.todos.filter(
        todo => todo.isdone ===  false
      );

      console.log(data.length);
    return (
      <p>
        remaining out of {data.length} tasks
      </p>
    );
  }
}

export default CountTask;