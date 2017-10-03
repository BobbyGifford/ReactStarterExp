import React, { Component } from 'react';

class StateTest extends Component {
constructor(){
    super();
    this.state = {
        checked: false
      }
      this.onCheck = this.onCheck.bind(this)      
    }
  onCheck(){
      let result = !this.state.checked
      this.setState({checked: result})
  }        
  render() {
      let msg;
      if(this.state.checked){
          msg = 'checked'
      }else{
          msg = 'unchecked'
      }    
    return (
        <div>
            <input type="checkbox" 
            defaultChecked={this.state.checked}
            onChange={this.onCheck}
            />
            <h4>Box is {msg}</h4>
        </div>
    );
  }
}

export default StateTest;
