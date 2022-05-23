const template = <div></div>;

const User = (props) => {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
};

MyComponent.defaultProps = {
  mystate: "defaultValue",
};

class MyComponent extends React.component {
  constructor(props) {
    super(props);
    this.myFunction = this.myFunction.bind(this);
    this.state = {
      mystate: 0,
    };
  }
  myFunction() {
    this.setState((preState) => {
      mystate: preState + 1;
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.myFunction}>{this.props.buttonName}</button>
      </div>
    );
  }
}

// prop.children --> get template to show inside HTML
<Layout>{template}</Layout>;
