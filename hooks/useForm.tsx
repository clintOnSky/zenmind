import { useState } from "react";

interface Control {
  register: (
    name: string,
    validate?: (value: string) => string | null
  ) => {
    onChange: (text: string) => void;
    onBlur: () => void;
    value: string;
    error: string | null;
  };
  handleSubmit: (
    callback: (data: { [key: string]: string }) => void
  ) => () => void;
}

export const useForm = (): Control => {
  const [formState, setFormState] = useState<{ [key: string]: string }>({});
  const [errors, setErrors] = useState<{ [key: string]: string | null }>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

  const register = (
    name: string,
    validate?: (value: string) => string | null
  ) => {
    return {
      value: formState[name] || "",
      error: errors[name] || null,
      onChange: (text: string) => {
        setFormState((prev) => ({ ...prev, [name]: text }));
        if (validate) {
          const error = validate(text);
          setErrors((prev) => ({ ...prev, [name]: error }));
        }
      },
      onBlur: () => {
        setTouched((prev) => ({ ...prev, [name]: true }));
        if (validate) {
          const error = validate(formState[name]);
          setErrors((prev) => ({ ...prev, [name]: error }));
        }
      },
    };
  };

  const handleSubmit =
    (callback: (data: { [key: string]: string }) => void) => () => {
      const validationErrors: { [key: string]: string | null } = {};
      let hasError = false;

      for (const name in formState) {
        const validate = errors[name];
        if (validate) {
          validationErrors[name] = validate;
          hasError = true;
        }
      }

      setErrors(validationErrors);

      if (!hasError) {
        callback(formState);
      }
    };

  return {
    register,
    handleSubmit,
  };
};
