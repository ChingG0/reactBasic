import React, { Component } from "react"
import Header from "./component/Header"
import List from "./component/List"
import Footer from "./component/Footer"
import "./App.css"

export default class App extends Component {
  state = {
    todos: [
      { id: "001", name: "eat", done: true },
      { id: "002", name: "sleep", done: true },
      { id: "003", name: "coding", done: false },
      { id: "004", name: "shopping", done: true },
    ],
  }

  //addTodo
  addTodo = (todoObj) => {
    //get todos
    const { todos } = this.state
    const newTodos = [...todos, todoObj]
    this.setState({ todos: newTodos })
  }

  //updateTodo
  updateTodo = (id, done) => {
    const { todos } = this.state
    const newTodos = todos.map((todoObj) => {
      if (todoObj.id === id) return { ...todoObj, done }
      else return todoObj
    })
    this.setState({ todos: newTodos })
  }

  deleteTodo = (id)=>{
    const {todos} = this.state
    const newTodos = todos.filter((todoObj)=>{
      return todoObj.id !== id
    })
    this.setState({todos: newTodos})
  }

  checkAllTodo = (done)=>{
    const {todos} = this.state
    const newTodos = todos.map((todoObj)=>{
      return {...todoObj, done}
    })
    this.setState({todos: newTodos})
  }

  clearAllDone = ()=>{
    const {todos} = this.state
    const newTodos = todos.filter((todoObj)=>{
      return !todoObj.done
    })
    this.setState({todos:newTodos})
  }

  render() {
    const { todos } = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header todos={todos} addTodo={this.addTodo} />
          <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
          <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>
        </div>
      </div>
    )
  }
}
