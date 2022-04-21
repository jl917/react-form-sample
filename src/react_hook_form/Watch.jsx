import { useForm } from "react-hook-form";

const WatchId = ({ form }) => {
  const id = form.watch("id");
  console.log('watchid render : ', id);
  return (
    <p>{id || '값을 입력해주세요.'}</p>
  )
}

export default function App() {
  const form = useForm();
  const { register, handleSubmit } = form;

  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("id")} />
      <input {...register("pw")} />
      <input type="submit" />
      <WatchId form={form} />
    </form>
  );
}
