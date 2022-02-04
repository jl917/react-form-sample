import { Form, Input, Button, Select } from "antd";
import { Fragment, useState } from "react";

export default function App() {
  const [form] = Form.useForm();
  const [fields, setFields] = useState([
    {
      name: 0,
      key: 0,
      isListField: true,
      fieldKey: 0
    }
  ]);

  const onFinish = (values) => {
    console.log(values);
  };

  const onChange = (value) => {
    const fields = [];
    const length = parseInt(value, 10);
    for (let i = 0; i < length; i++) {
      fields.push({
        name: i,
        key: i,
        isListField: true,
        fieldKey: i
      });
    }
    setFields(fields);
  };
  return (
    <Form onFinish={onFinish} form={form}>
      <Select defaultValue="1" onChange={onChange}>
        <Select.Option value="1">1</Select.Option>
        <Select.Option value="2">2</Select.Option>
        <Select.Option value="3">3</Select.Option>
      </Select>
      <Form.List name="users">
        {() =>
          fields.map((field, index) => (
            <Fragment key={field.name}>
              <h1>{field.name}</h1>
              <Form.Item name={[field.name, "id"]}>
                <Input />
              </Form.Item>
              <Form.Item name={[field.name, "password"]}>
                <Input />
              </Form.Item>
            </Fragment>
          ))
        }
      </Form.List>

      <Button htmlType="submit">submit</Button>
    </Form>
  );
}
