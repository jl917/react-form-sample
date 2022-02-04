import { Form, Button, Select } from "antd";
import { atom, RecoilRoot, useSetRecoilState, useRecoilValue } from "recoil";

const atomUseYn = atom({
  key: "atomuseyn",
  default: "Y"
});

function App() {
  const setUseYn = useSetRecoilState(atomUseYn);
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
      <Button htmlType="submit">submit</Button>
    </Form>
  );
}

function Side() {
  const useYn = useRecoilValue(atomUseYn);
  return (
    <>
      <h3>other component</h3>
      <div>{useYn}</div>
    </>
  );
}

export default function Root() {
  return (
    <RecoilRoot>
      <App />
      <Side />
    </RecoilRoot>
  );
}
