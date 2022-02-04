import { useForm } from "react-hook-form";
import { useState } from "react";

export default function App() {
  const [useYn, setUseYn] = useState("Y");
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
      <input type="submit" disabled={useYn === "Y"} />
      {useYn === "Y" && <p>"visable component"</p>}
    </form>
  );
}
