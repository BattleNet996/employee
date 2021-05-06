// import { Component } from "react";

// class WithProps extends Component {
//   render() {
//     const { changeHandler, value, options = [] } = this.props;

// return (
//   <select value={value} onChange={(e) => changeHandler(e.target.value)}>
//     <option value={""}>--------</option>

//     {options.map((o, index) => (
//       <option key={index} value={o.value}>
//         {o.name}
//       </option>
//     ))}
//   </select>
// );
//   }
// }

function WithProps(props) {
  const { changeHandler, value, options = [] } = props;

  return (
    <select value={value} onChange={(e) => changeHandler(e.target.value)}>
      <option value="">--------</option>

      {options.map((o, index) => (
        <option key={index} value={o.value}>
          {o.name}
        </option>
      ))}
    </select>
  );
}

export default WithProps;
