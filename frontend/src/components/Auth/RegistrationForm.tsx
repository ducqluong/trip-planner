import { useForm } from "react-hook-form";
import InputField from "../common/InputField";

type Inputs = {
  email: string;
  password: string;
};

export default function RegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit = (data: Inputs) => {
    console.log(data);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">CoordiTrip</h1>
      <form
        className="flex-col bg-yellow-200"
        onSubmit={handleSubmit(onSubmit)}
      >
        <InputField
          label="Email"
          type="email"
          name="email"
          register={register}
          error={errors.email}
        />
        <InputField
          label="Password"
          type="password"
          name="password"
          register={register}
          error={errors.password}
        />

        <button
          className="bg-blue-500 text-white py-2 px-4 rounded"
          type="submit"
        >
          Register
        </button>
      </form>
    </div>
  );
}
