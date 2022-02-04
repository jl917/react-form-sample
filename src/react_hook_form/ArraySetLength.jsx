import { Fragment } from "react";
import { useForm, useFieldArray } from "react-hook-form";

// useFieldArray 사용시 ??
export default function App() {
  const { control, register, handleSubmit, getValues } = useForm({
    defaultValues: {
      users: [{ username: "dao", password: "123123" }]
    }
  });
  const { fields, replace } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormContext)
    name: "users" // unique name for your Field Array
    // keyName: "id", default to "id", you can change the key name
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  const onChange = (e) => {
    const _fields = getValues("users");
    const value = e.target.value;
    const length = parseInt(value, 10);
    const newFields = [];

    for (let i = 0; i < length; i++) {
      newFields.push(_fields[i] || { username: "de", password: "de" });
    }
    replace(newFields);
  };
  return (
    <>
      <select onChange={onChange} defaultValue="1">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field, index) => (
          <Fragment key={field.id}>
            <input {...register(`users.${index}.username`)} />
            <input {...register(`users.${index}.password`)} />
          </Fragment>
        ))}
        <input type="submit" />
      </form>
    </>
  );
}
