import {
  FieldErrorsImpl,
  UseControllerReturn,
  UseFormRegister,
  UseFormSetFocus,
} from 'react-hook-form';
import { MyInput } from '../../../components/elements/Forms/auth/RegisterOtpForm';

export interface RegisterOtpInputType {
  id: string;
  type: string;
  name: string;
  required?: boolean;
  isTouched: boolean,
  dir: 'ltr' | 'rtl' | 'auto';
  controller: UseControllerReturn<MyInput, 'regOtp'>;
  register: UseFormRegister<MyInput>;
  errors: FieldErrorsImpl<{
    [key: string]: string;
  }>;
}
