import { ErrorMessage } from "@hookform/error-message";
import type { FieldErrors, UseFormRegister } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";

interface FormGeneratorProps {
  type?: "text" | "email" | "password" | "number";
  inputType: "select" | "input" | "textarea";
  options?: { value: string; label: string; id: string }[];
  label?: string;
  placeholder: string;
  register: UseFormRegister<any>;
  name: string;
  errors: FieldErrors;
  lines?: number;
}

export function FormGenerator({
  inputType,
  options,
  label,
  placeholder,
  register,
  name,
  errors,
  type,
  lines,
}: FormGeneratorProps) {
  switch (inputType) {
    case "input":
      return (
        <Label className="flex flex-col gap-2" htmlFor={`input-${label}`}>
          {label ? label : null}
          <Input
            className="bg-themeBlack border-themeGray text-themeTextGray"
            id={`input-${label ?? name}`}
            placeholder={placeholder}
            type={type}
            {...register(name)}
          />
          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => (
              <p className="mt-2 text-red-400">
                {message === "Required" ? "" : message}
              </p>
            )}
          />
        </Label>
      );
    case "select":
      return (
        <Label className="flex flex-col gap-2" htmlFor={`select-${label}`}>
          {label ? label : null}
          <select
            className="w-full rounded-lg border-[1px] bg-transparent p-3"
            id={`select-${label}`}
            {...register(name)}
          >
            {options?.length
              ? options.map((option) => (
                  <option
                    className="dark:bg-muted"
                    key={option.id}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))
              : null}
          </select>
          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => (
              <p className="mt-2 text-red-400">
                {message === "Required" ? "" : message}
              </p>
            )}
          />
        </Label>
      );
    case "textarea":
      return (
        <Label className="flex flex-col gap-2" htmlFor={`input-${label}`}>
          {label ? label : null}
          <Textarea
            className="bg-themeBlack border-themeGray text-themeTextGray"
            id={`input-${label}`}
            placeholder={placeholder}
            {...register(name)}
            rows={lines}
          />
          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => (
              <p className="mt-2 text-red-400">
                {message === "Required" ? "" : message}
              </p>
            )}
          />
        </Label>
      );
    default:
      return <div />;
  }
}
