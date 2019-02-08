import React, { Component } from 'react';
import List from './List';

class Todo extends Component {
  render() {
    // console.log(this.props.data);
    let items = [];
    let itemsDone = [];
    if(this.props.data)
      this.props.data.forEach((item) => {
        if(item.done === false)
          items.push(item);
        else
          itemsDone.push(item);
      });
    return (
      <div className="Todo">

        <List data={items} onItemClick={this.props.onItemClick} onItemDelete={this.props.onItemDelete} />

        <List data={itemsDone} done={true} onItemClick={this.props.onItemClick} onItemDelete={this.props.onItemDelete} />

      </div>
    );
  }
}

export default Todo;
