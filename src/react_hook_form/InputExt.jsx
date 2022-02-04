import { forwardRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField } from "@mui/material";

const Wrap = forwardRef((props, ref) => {
  return (
    <TextField
      label="username"
      defaultValue={props.value}
      variant="outlined"
      onChange={props.onChange}
    />
  );
});

export default function App() {
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      username: "dao"
    }
  });

  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      Deving...
      <Controller
        name="username"
        control={control}
        render={(form) => <Wrap {...form.field} />}
      />
      <input type="submit" />
    </form>
  );
}
