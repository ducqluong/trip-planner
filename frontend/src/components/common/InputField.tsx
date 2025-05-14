import type {
  UseFormRegister,
  FieldValues,
  FieldError, // Import FieldError
  Path, // Import Path
} from "react-hook-form";

// Make InputFieldProps generic over the form data type
interface InputFieldProps<TFieldValues extends FieldValues> {
  label: string;
  type: string;
  // Use Path<TFieldValues> to ensure 'name' is a valid key from the form data
  name: Path<TFieldValues>;
  // The register prop is now typed specifically for the form data type
  register: UseFormRegister<TFieldValues>;
  // Use FieldError for the specific field's error
  error?: FieldError;
}

// Make the component generic
export default function InputField<TFieldValues extends FieldValues>({
  label,
  type,
  name,
  register,
  error,
}: InputFieldProps<TFieldValues>) {
  return (
    <div>
      <label
        htmlFor={name as string} // Cast name to string for htmlFor (Path can be more complex)
        className="sr-only"
      >
        {label}
      </label>
      <input
        id={name as string} // Cast name to string for id
        type={type}
        placeholder={label}
        {...register(name, { required: true })} // register now correctly typed for 'name'
        className={`
          block
          w-full
          px-3
          py-2
          border
          border-gray-100
          placeholder-black-400
          rounded-md
          shadow-sm
          focus:outline-none
          focus:ring-blue-500
          focus:border-blue-500
          sm:text-sm
          ${error ? "border-red-500" : ""}
        `}
      />
      {error && (
        <span className="text-red-500 text-sm mt-1">
          {/* Display specific error message if available, otherwise a default */}
          {error.message || "This field is required"}
        </span>
      )}
    </div>
  );
}
