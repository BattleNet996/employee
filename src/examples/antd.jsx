import { Card, Input } from "antd";
import { Icon } from "../components";

export default function WithAntd() {
  return (
    <Card title="antd 样例">
      <Input />
      <Icon
        type="icon-xue"
        style={{
          fontSize: "60px",
        }}
      />
    </Card>
  );
}