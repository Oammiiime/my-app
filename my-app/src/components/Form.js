import { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { data: "" };
    this.dokey = this.dokey.bind(this)
    this.onKeyDown = this.onKeyDown.bind(this)
  }

  // React's component life cycle
  componentDidMount() {
 
  }

  componentWillUnmount() {

  }

  dokey(event){
    var key = event.keyCode || event.charCode;

    if( key == 8 || key == 46 ){
        this.setState({data : ""})
    }else
      this.setState({data : this.state.data + event.key})
  }

  onKeyDown(event){
    var key = event.keyCode || event.charCode;

    if( key == 8  ){
        if (event.keyCode === 8) {
            this.setState({data : this.state.data.substring(0,this.state.data.length -1) })
        }
    }
  }

  render() {
    return (
      <div>
      <input type = "text" onKeyPress={this.dokey}  onKeyDown={this.onKeyDown}/>
       <p> Hello : {this.state.data} </p>
      </div>
    );
  }
}

export default Form;