import { Component } from "react";

export default class WithLifeCycle extends Component {
  constructor(props) {
    super(props);

    console.log("constructor");

    this.containerRef = null;
    this.timer = null;

    this.state = {
      a: 1,
    };
  }

  static getDerivedStateFromProps(nextProps, nextState) {
    console.log("getDerivedStateFromProps", nextProps, nextState);
    return nextState;
  }

  componentDidMount() {
    console.log("componentDidMount", this.containerRef);

    // this.timer = setInterval(() => {
    //   this.setState({
    //     a: Math.random() * 100000,
    //   });
    // }, 1000);
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
  }

  componentDidUpdate() {
    console.log("componentDidUpdate", this.containerRef);

    // const newDiv = document.createElement("div");
    // newDiv.innerHTML = "haha";

    // this.containerRef.appendChild(newDiv);
  }

  render() {
    console.log("render");

    const { a } = this.state;

    return (
      <div ref={(r) => (this.containerRef = r)}>
        <div>{a}</div>
        <button
          onClick={() =>
            this.setState({
              a: a + 1,
            })
          }
        >
          点一下更新组件
        </button>
      </div>
    );
  }
}
