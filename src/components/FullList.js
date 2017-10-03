import React, { Component } from 'react';
import Buttons from './Buttons'

class FullList extends Component {
    constructor(){
        super();
        this.state = {
            sections: [
                {title: 'Section 1'},
                {title: 'Section 2'}
            ]
        }
        this.update = this.update.bind(this)
        this.delete = this.delete.bind(this)
        this.add = this.add.bind(this)
    }

    delete(i){
        let arr = this.state.sections
        arr.splice(i, 1)
        this.setState({sections: arr})
    }

    update(i, newText){
        let arr = this.state.sections
        arr[i].title = newText
        this.setState({sections: arr})
    }

    add(newText){
        let arr = this.state.sections
        arr.push({title: newText})
        this.setState({sections: arr})
    }

    eachItem(section, i) {
        return (
            <Buttons 
            key={i}
            index={i}
            updateItem={this.update}
            deleteItem={this.delete}
            addItem={this.add}
            >{section.title}</Buttons>
        )
    }

  render() {
    return (
      <div>
          {this.state.sections.map(this.eachItem, this)}
      </div>
    );
  }
}

export default FullList;
