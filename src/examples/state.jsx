import { Component } from "react";

class WithState extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "",
      counter: 0,
    };
  }

  render() {
    const { content, counter } = this.state;

    return (
      <div>
        <input
          type="text"
          onChange={(e) => {
            this.setState({
              content: e.target.value,
            });
          }}
        />

        <div>{content}</div>

        <button
          onClick={() =>
            this.setState({
              counter: counter + 1,
            })
          }
        >
          点一下增加计数值
        </button>

        <div>点击了{counter}次</div>
      </div>
    );
  }
}

export default WithState;
