import React from 'react'

class Mainpage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      dataState: 'state-dummy',
    };
  }
  render() {
    return (
      <div>
        <p>{this.props.data}</p>
        <p>{this.state.dataState}</p>
      </div>
    )
  }
}

export default Mainpage;