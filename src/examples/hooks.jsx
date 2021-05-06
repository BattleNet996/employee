import { useState, useEffect } from "react";

function useCustomize(props) {
  const [content, setContent] = useState("");
  const [counter, setCounter] = useState(0);

  const { value } = props;

  useEffect(() => {
    console.log("content 变了");
  }, [content]);

  useEffect(() => {
    setCounter(counter + 1);
  }, [value]);

  return [content, setContent, counter, setCounter, value];
}

export default function WithHooks(props) {
  const [content, setContent, counter, setCounter, value] = useCustomize(props);

  return (
    <div>
      <input type="text" onChange={(e) => setContent(e.target.value)} />
      <div>{content}</div>
      <button onClick={() => setCounter(counter + 1)}>点一下增加计数值</button>
      <div>点击了{counter}次</div>
      <div>value={value}</div>
    </div>
  );
}