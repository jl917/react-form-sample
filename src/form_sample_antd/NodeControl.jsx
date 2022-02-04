import { Form, Button, Select } from "antd";
import { useState } from "react";

export default function App() {
  const [useYn, setUseYn] = useState("Y");
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
  };

  const onChange = (value) => {
    setUseYn(value);
  };
  return (
    <Form onFinish={onFinish} form={form}>
      <Form.Item name="useYn" initialValue="Y">
        <Select onChange={onChange}>
          <Select.Option value="Y">Y</Select.Option>
          <Select.Option value="N">N</Select.Option>
        </Select>
      </Form.Item>
      {useYn === "Y" && <p>"visable component"</p>}
      <Button htmlType="submit" disabled={useYn === "Y"}>
        submit
      </Button>
    </Form>
  );
}
