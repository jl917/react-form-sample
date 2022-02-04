import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>array sample</h2>
      <input {...register("list.0.name")} />
      <input {...register("list.1.name")} />

      <h2>Object sample</h2>
      <input {...register("person.name.first")} />
      <input {...register("person.name.last")} />
      <input type="submit" />
    </form>
  );
}
