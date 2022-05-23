import React from "react";

// Add state to parent
export default class AddOption extends React.Component {
  state = {
    error: undefined,
  };
  // constructor(props) {
  //   super(props);
  //   this.handleAddOption = this.handleAddOption.bind(this);
  // }
  // New Syntax not bind class manually
  handleAddOption = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    e.target.elements.option.value = "";
    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error }));
  };
  
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}
