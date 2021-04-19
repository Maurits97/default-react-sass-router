import React from 'react'

class Detailpage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      header: 'Detail page',
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

export default Detailpage;