import { Form, Input, Button } from "antd";

export default function App() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <Form onFinish={onFinish} form={form}>
      <h2>array sample</h2>
      <Form.Item name={["list", 0, "name"]}>
        <Input />
      </Form.Item>
      <Form.Item name={["list", 1, "name"]}>
        <Input />
      </Form.Item>
      <h2>Object sample</h2>
      <Form.Item name={["person", "name", "first"]}>
        <Input />
      </Form.Item>
      <Form.Item name={["person", "name", "last"]}>
        <Input />
      </Form.Item>
      <Button htmlType="submit">submit</Button>
    </Form>
  );
}
