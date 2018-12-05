import React, { Component } from 'react';
import axios from "axios";
import {NavLink} from 'react-router-dom'

export default class ClassList extends Component {
  constructor() {
    super()
    this.state ={
      students: []
    }
    
  }
  componentDidMount(){
    axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`).then(res =>{
    this.setState({
        students: res.data
      })
    })
  }

  render() {
    let{students} = this.state;
    console.log(students)
    let studentRender = students.map(val => 
      <NavLink to={`/student/${val.id}`}>
        <h3>{val.first_name} {val.last_name}</h3>
      </NavLink>
    )
    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {studentRender}

      </div>
    )
  }
}