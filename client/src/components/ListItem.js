import React, { Component } from 'react';

class List extends Component {
  render() {
    return (
      <div className="ListItem" onClick={() => this.props.onItemClick(this.props.id, this.props.done)}>
        <div className="ListItem__Point"></div>
        <div className="ListItem__Name">
          {this.props.name}
        </div>
        {
          this.props.done &&
          <div className="ListItem__Delete" onClick={(e) => this.props.onItemDelete(this.props.id, e)}>×</div>
        }
      </div>
    );
  }
}

export default List;
