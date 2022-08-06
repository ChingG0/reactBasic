import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import {nanoid} from 'nanoid'
import './index.css'

export default class Header extends Component {

  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }

  handleKeyUp = (event)=>{
    const {keyCode, target} = event
    if(keyCode !== 13) return
    if(target.value.trim() === ''){
      alert("Please type something...")
      return
    }
    const {todos} = this.props
    const todoObj = {id:(todos.length+1).toString().padStart(3, '0'), name:target.value,done:false}
    this.props.addTodo(todoObj)
    target.value = ''
  }
  render() {
    return (
      <div className="todo-header">
      <input onKeyUp={this.handleKeyUp} type="text" placeholder='Enter your task, press enter'/>
    </div>
    )
  }
}