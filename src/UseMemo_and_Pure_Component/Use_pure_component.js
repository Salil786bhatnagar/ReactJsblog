import React, { Component } from 'react'

export default class Use_pure_component extends Component {

    constructor(){
        super()
        this.state={
            count:1
        }
    }

  render() {
    console.warn("check the re-rendring")
    return (
        
      <div>
          Use_pure_component
          <h1>pure component {this.state.count }</h1>
          <button onClick={()=>this.setState({count:this.state.count+1})}>update count</button>
      </div>
    )
  }
}
