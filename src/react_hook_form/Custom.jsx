import { forwardRef } from "react";
import { useForm, Controller } from "react-hook-form";

const Input = forwardRef((props, ref) => {
  const { value, onChange } = props;
  const setValue = () => {
    onChange({ name: "ming", age: 30 });
  };
  return (
    <div>
      {value.name} - {value.age}
      <br />
      <button onClick={setValue}>setValue</button>
    </div>
  );
});

export default function App() {
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      person: { name: "dao", age: 18 }
    }
  });

  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="person"
        control={control}
        render={(form) => <Input {...form.field} />}
      />
      <input type="submit" />
    </form>
  );
}
