import type { RegisterData } from "../../Register.vue";

interface RegisterFormProps {
  schema: yup.ObjectSchema<RegisterData>;
  onSubmit: (data) => void;
  error: string | null;
  isLoading: boolean;
}

interface RegisterFormEmits {}

export { RegisterFormProps, RegisterFormEmits }
