import React, { Component } from 'react';

class Item extends Component {
  render() {
    let stringProp = this.props.testProp;
    
    return (
      <div>
          <h1>Juice is loose</h1>
          <p>{stringProp}</p>
      </div>
    );
  }
}

export default Item;
