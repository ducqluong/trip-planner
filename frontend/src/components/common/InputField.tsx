import type {
  UseFormRegister,
  FieldValues,
  FieldErrors,
} from "react-hook-form";

interface InputFieldProps {
  label: string;
  type: string;
  name: string;
  register: UseFormRegister<FieldValues>;
  error?: FieldErrors[string];
}

export default function InputField({
  label,
  type,
  name,
  register,
  error,
}: InputFieldProps) {
  return (
    <div>
      <label>{label}</label>
      <input type={type} {...register(name, { required: true })} />
      {error && <span>This field is required</span>}{" "}
    </div>
  );
}
