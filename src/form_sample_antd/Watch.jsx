import { Form, Input, Button } from "antd";

const WatchId = ({ form }) => {
  const id = Form.useWatch('id', form);
  console.log('watchid render : ', id);
  return (
    <p>{id || '값을 입력해주세요.'}</p>
  )
}

export default function App () {
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
      <WatchId form={form} />
      <Button htmlType="submit">submit</Button>
    </Form>
  );
}
