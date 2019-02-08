import React, { Component } from 'react';

class Bar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  };
  handleSubmit = e => {
    // console.log(e);
    if(e === 'add' || e.keyCode === 13) {
      this.props.onAdd(this.state.value);
      this.setState({ value: '' })
    }
  };
  render() {
    return (
      <div className="Bar">
        <input type="text" className="Bar__Input" placeholder="new task..."
          value={this.state.value}
          onChange={e => this.setState({ value: e.target.value })}
          onKeyDown={this.handleSubmit} />
        <div className="Bar__Button" onClick={() => this.handleSubmit('add')}>+</div>
      </div>
    );
  }
}

export default Bar;
