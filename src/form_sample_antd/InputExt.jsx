import { Form, Button } from "antd";
import TextField from "@mui/material/TextField";

const Wrap = (props) => {
  return (
    <TextField
      label="username"
      defaultValue={props.value}
      variant="outlined"
      onChange={props.onChange}
    />
  );
};

export default function App() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <Form onFinish={onFinish} form={form}>
      Deving...
      <Form.Item name="username" initialValue="dao">
        <Wrap />
      </Form.Item>
      <Button htmlType="submit">submit</Button>
    </Form>
  );
}
