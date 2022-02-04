import { useForm } from "react-hook-form";
import { atom, RecoilRoot, useSetRecoilState, useRecoilValue } from "recoil";

const atomUseYn = atom({
  key: "atomuseyn",
  default: "Y"
});

function App() {
  const setUseYn = useSetRecoilState(atomUseYn);
  const { register, handleSubmit } = useForm();

  const onSubmit = (values) => {
    console.log(values);
  };

  const onChange = (e) => {
    setUseYn(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <select onChange={onChange}>
        <option value="Y">Y</option>
        <option value="N">N</option>
      </select>
      <input {...register("id")} />
      <input {...register("pw")} />
      <input type="submit" />
    </form>
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
