import { Form, Button } from "antd";

const Custom = ({ value, onChange }) => {
  const setValue = () => {
    onChange({ name: "ming", age: 30 });
  };
  return (
    <div>
      {value.name} - {value.age}
      <br />
      <Button onClick={setValue}>setValue</Button>
    </div>
  );
};

export default function App() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <Form onFinish={onFinish} form={form}>
      <Form.Item name="person" initialValue={{ name: "dao", age: 18 }}>
        <Custom />
      </Form.Item>
      <Button htmlType="submit">submit</Button>
    </Form>
  );
}
