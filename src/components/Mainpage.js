import React from 'react'

class Mainpage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      header: 'Home page',
    };
  }
  render() {
    return (
      <div>
        <h1>{this.state.header}</h1>
      </div>
    )
  }
}

export default Mainpage;