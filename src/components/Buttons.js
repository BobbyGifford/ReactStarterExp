import React, { Component } from 'react';

class Buttons extends Component {
    constructor(){
        super();
        this.state = {
            editing: false,
            title: null
        }
    this.edit = this.edit.bind(this)
    this.delete = this.delete.bind(this)
    this.save = this.save.bind(this)
    this.add = this.add.bind(this)
    }
    edit(){
        this.setState({editing: true})
    }
    delete(){
        this.props.deleteItem(this.props.index)
    }
    save(){
        this.props.updateItem(this.props.index, this.refs.editText.value)        
        this.setState({editing: false})
    }

    add(){
        this.props.addItem('New Item')
    }

    renderNormal(){
        return(
        <div>
            <h1>{this.props.children}</h1>
            <button onClick={this.edit} className="btn btn-warning">Edit</button>
            <br />
            <button onClick={this.delete} className="btn btn-danger">Delete</button>
            <br />
            <button onClick={this.add} className="btn btn-info">Add</button>
        </div>  
        )
    }
    renderForm(){
        return (
        <div>
            <h1>{this.props.children}</h1>
            <textarea defaultValue={this.props.children} ref="editText" />
            <br />
            <button onClick={this.save} className="btn btn-success">Save</button>
        </div>  
        )
    }
  render() {    
    if(this.state.editing){
        return this.renderForm();
    }else{
        return this.renderNormal();
    }
  }
}

export default Buttons;
