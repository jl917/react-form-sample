import { useContext } from "react";
import { useForm } from "react-hook-form";
import Context from "./Context";

function App() {
  const { defaultForm } = useContext(Context);
  const { register, handleSubmit } = defaultForm;

  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("id")} />
      <input {...register("pw")} />
      <input type="submit" />
    </form>
  );
}

function Side() {
  const { defaultForm } = useContext(Context);
  const { setValue } = defaultForm;

  const onClick = () => {
    setValue("id", "daodd");
  };

  return (
    <>
      <h2>other component</h2>
      <button onClick={onClick}>set value</button>
    </>
  );
}

export default function Root() {
  const defaultForm = useForm();

  return (
    <Context.Provider value={{ defaultForm }}>
      <App />
      <Side />
    </Context.Provider>
  );
}
