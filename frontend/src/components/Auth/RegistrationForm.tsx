import { useForm } from "react-hook-form";

type Inputs = {
  email: string;
  password: string;
  confirmPassword: string;
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
    <form className="flex-col" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Email</label>
        <input type="email" {...register("email", { required: true })} />
        {errors.email && <span>This field is required</span>}
      </div>

      <div>
        <label>Password</label>
        <input
          type="password"
          {...register("password", { required: true })}
        />
        {errors.password && <span>This field is required</span>}
      </div>

      <div>
        <label>Confirm Password</label>
        <input
          type="password"
          {...register("confirmPassword", { required: true })}
        />
        {errors.confirmPassword && <span>This field is required</span>}
      </div>

      <button type="submit">Register</button>
    </form>
  );
}
