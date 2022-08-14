import {
  FieldErrorsImpl,
  UseControllerReturn,
  UseFormRegister,
  UseFormSetFocus,
} from 'react-hook-form';
import { MyInput } from '../../../components/elements/Forms/LoginForm';


export interface FloatingLabelInputType {
  id: string;
  type: string;
  name: string;
  label: string;
  required?: boolean;
  setFocus: UseFormSetFocus<MyInput>;
  dir: 'ltr' | 'rtl' | 'auto';
  controller: UseControllerReturn<MyInput, 'emailOrPhone'>;
  register: UseFormRegister<MyInput>;
  errors: FieldErrorsImpl<{
    [key: string]: string;
  }>;
}
