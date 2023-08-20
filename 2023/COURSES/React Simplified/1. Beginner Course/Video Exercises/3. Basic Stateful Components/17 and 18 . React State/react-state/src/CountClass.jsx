import React from "react"

export class CountClass extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
  }

  handleClick = () => {
    this.setState((currentState) => ({
      count: currentState.count + 1,
    }))
  }

  render() {
    return <div onClick={this.handleClick}>Class Counter: {this.state.count}</div>
  }
}
