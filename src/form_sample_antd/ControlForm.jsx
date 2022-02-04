import { Form, Input, Button } from "antd";

export default function App() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
  };

  const getId = () => {
    console.log(form.getFieldValue("id"));
  };

  const setId = () => {
    form.setFieldsValue({
      id: "setName",
      pw: "123123",
      name: { first: "dao" }
    });
  };

  const getAll = () => {
    console.log(form.getFieldsValue());
  };
  return (
    <>
      <Form onFinish={onFinish} form={form}>
        <Form.Item name="id">
          <Input />
        </Form.Item>
        <Form.Item name="pw">
          <Input />
        </Form.Item>
        <Form.Item name={["name", "first"]}>
          <Input />
        </Form.Item>
        <Button htmlType="submit">submit</Button>
      </Form>
      <div>
        <Button onClick={getId}>getId</Button>
        <Button onClick={setId}>setId</Button>
        <Button onClick={getAll}>getFormAllData</Button>
      </div>
    </>
  );
}
