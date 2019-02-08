import React, { Component } from 'react';
import ListItem from './ListItem';

class List extends Component {
  render() {
    let listClass = 'List';
    if(this.props.done === true) listClass += ' List--done';
    const rows = [];
    // console.log(this.props);
    if(this.props.data && Object.keys(this.props.data).length){
      Object.values(this.props.data).forEach((todo, i) => {
        rows.push(
          <ListItem name={todo.name}
            key={todo._id}
            id={todo._id}
            done={todo.done}
            onItemClick={this.props.onItemClick}
            onItemDelete={this.props.onItemDelete}/>
        );
      });
    }
    return (
      <div className={listClass}>

        {rows}

      </div>
    );
  }
}

export default List;
