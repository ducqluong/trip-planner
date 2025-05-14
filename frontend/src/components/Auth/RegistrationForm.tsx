import { useForm } from "react-hook-form";
import InputField from "../common/InputField";

type Inputs = {
  firstName: string;
  lastName: string;
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
    <div className="">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Create a new account
      </h1>
      <form
        className="
        flex
        flex-col
        gap-4
        border-2
        rounded-lg
        shadow-lg
        bg-yellow-200       
        p-6         
      "
        onSubmit={handleSubmit(onSubmit)}
      >
        <InputField
          label="First name"
          type="text"
          name="firstName"
          register={register}
          error={errors.firstName}
        />
        <InputField
          label="Last name"
          type="text"
          name="lastName"
          register={register}
          error={errors.lastName}
        />
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
          Sign Up
        </button>
      </form>
    </div>
  );
}
