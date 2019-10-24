
import React, {Component} from 'react'

class Header1 extends Component{

  constructor(props){
    super(props);
    alert(props.name);
    this.state = {
          var: "Umer"
        };
  }

  render(){
      return(
      <div>
       <h1> Hello How are You {this.state.var} {this.props.name} {this.props.rollno} </h1>
      </div>
     );
  }

  componentDidMount(){
    alert (this.props.rollno);
  }

}

export default Header1;
