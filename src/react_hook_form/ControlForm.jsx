import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit, getValues, setValue } = useForm();

  const onSubmit = (values) => {
    console.log(values);
  };

  const getId = () => {
    console.log(getValues("id"));
  };

  const setId = () => {
    setValue("id", "langl!");
    setValue("pw", "123123");
    setValue("name.first", "dao");
  };
  const getAll = () => {
    console.log(getValues());
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("id")} />
        <input {...register("pw")} />
        <input {...register("name.first")} />
        <input type="submit" />
      </form>
      <div>
        <button onClick={getId}>getId</button>
        <button onClick={setId}>setId</button>
        <button onClick={getAll}>getFormAllData</button>
      </div>
    </>
  );
}
