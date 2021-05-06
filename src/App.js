import { Component } from "react";

import {
  WithProps,
  Card,
  WithState,
  WithLifeCycle,
  WithHooks,
  FunctionCard,
  WithAntd,
} from "./examples";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      options: [
        {
          value: "apple",
          name: "苹果",
        },
        {
          value: "pineapple",
          name: "菠萝",
        },
      ],
    };
  }

  render() {
    const { value, options } = this.state;

    return (
      <div className="App">
        <Card title="State 演示">
          <WithState />
        </Card>
        <Card title="Props 演示">
          <WithProps
            value={value}
            options={options}
            changeHandler={(update) =>
              this.setState({
                value: update,
              })
            }
          />
          <div>{value}</div>
        </Card>
        <Card title="生命周期演示">
          <WithLifeCycle />
        </Card>
        <FunctionCard title="函数式组件&Hooks">
          <WithHooks value={value} />
        </FunctionCard>
        <WithAntd />
      </div>
    );
  }
}

export default App;