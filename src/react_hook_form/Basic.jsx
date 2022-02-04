import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit } = useForm();

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
