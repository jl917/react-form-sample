import { Form, Input, Button } from "antd";

export default function App() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <Form onFinish={onFinish} form={form}>
      <Form.Item name="id">
        <Input />
      </Form.Item>
      <Form.Item name="pw">
        <Input />
      </Form.Item>
      <Button htmlType="submit">submit</Button>
    </Form>
  );
}
