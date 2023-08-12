import React from "react"

export class TodoListItemClass extends React.Component {
  render() {
    return (
      <div>
        <label>
          <input type="checkbox" defaultChecked={this.props.isComplete} />
          {this.props.children}
        </label>
      </div>
    )
  }
}
