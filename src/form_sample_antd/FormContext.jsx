import { useContext } from "react";
import Context from "./Context";
import { Form, Button, Input } from "antd";

function App() {
  const { defaultForm } = useContext(Context);

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Form onFinish={onFinish} form={defaultForm}>
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

function Side() {
  const { defaultForm } = useContext(Context);

  const onClick = () => {
    defaultForm.setFieldsValue({
      id: "setName"
    });
  };

  return (
    <>
      <h2>other component</h2>
      <Button onClick={onClick}>set value</Button>
    </>
  );
}

export default function Root() {
  const [defaultForm] = Form.useForm();

  return (
    <Context.Provider value={{ defaultForm }}>
      <App />
      <Side />
    </Context.Provider>
  );
}
