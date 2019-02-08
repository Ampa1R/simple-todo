import React, { Component } from 'react';
import './App.css';
import Bar from './components/Bar';
import Todo from './components/Todo';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: '',
      loading: true,
    };
  };
  componentDidMount() {
    this.getData();
  };
  getData = async () => {
    this.setState({ loading: true });
    const response = await fetch('/todo');
    const body = await response.json();
    if(response.status !== 200) throw Error(body.message);
    else this.setState({ data: body.data, loading: false });
  };
  addTodo = async (newTodo) => {
    this.setState({ loading: true });
    const response = await fetch('/todo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ todo: newTodo}),
    });
    const body = await response.json();
    // console.log(body);
    if(response.status !== 200) throw Error(body.message);
    else this.getData();
  };
  handleItemClick = async (itemId, itemCurrentStatus) => {
    console.log('handleItemClick');
    console.log(itemId);
    console.log(itemCurrentStatus);
    this.setState({ loading: true });
    const response = await fetch('/todo', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: itemId, done: !itemCurrentStatus }),
    });
    const body = await response.json();
    console.log(body);
    if(response.status !== 200) throw Error(body.message);
    else this.getData();
  };
  handleItemDelete = async (itemId, e) => {
    e.stopPropagation();
    this.setState({ loading: true });
    const response = await fetch('/todo', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: itemId }),
    });
    const body = await response.json();
    if(response.status !== 200) throw Error(body.message);
    else this.getData();
  };
  render() {
    return (
      <div className="App">
        <div className="AppLogo">
          todo app
        </div>

        <Bar onAdd={this.addTodo} />

        <Todo data={this.state.data} onItemClick={this.handleItemClick} onItemDelete={this.handleItemDelete} />
      </div>
    );
  }
}

export default App;
