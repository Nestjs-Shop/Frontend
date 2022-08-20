import {
  SubmitHandler,
  useController,
  useForm,
  useFormState,
} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import FloatingLabelInput from '../../Inputs/FloatingLabelInput';
import Link from 'next/link';
import { registerOtpSchema as schema } from '../../../../validation/schemas/registerOtp.schema';
import RegisterOtpInput from '../../Inputs/RegisterOtpInput';
import { useRegisterStore } from '../../../../store/auth/register';

export type MyInput = {
  regOtp: string;
};

const RegisterOtpForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
    getFieldState,
  } = useForm<MyInput>({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: {
      regOtp: '',
    },
  });
  const controller = useController({ name: 'regOtp', control });
  const { isTouched } = getFieldState('regOtp');
  const userPhone = useRegisterStore((state) => state.userPhone);

  const onSubmit: SubmitHandler<MyInput> = (data) => {
    console.log(data);
  };

  return (
    <form
      className='flex flex-col px-10 pb-[30px] border rounded-sm pt-9 w-11/12 xs:w-96'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className='text-justify'>
        <span className='text-sm text-gray-700 text-[12.5px]'>
          کد ارسال شده به شماره موبایل <span className='mx-1'>{userPhone}</span>
          را وارد نمایید.
        </span>
      </div>
      <RegisterOtpInput
        id='regOtp'
        type='text'
        name='regOtp'
        dir='ltr'
        isTouched={isTouched}
        controller={controller}
        register={register}
        errors={errors}
      />
      <button
        className='p-[7px] mt-10 text-white transition-all border border-transparent rounded-sm disabled:bg-gray-300 disabled:border disabled:border-gray-300 bg-cyan-500 hover:bg-white hover:border hover:border-cyan-500 hover:text-cyan-500 disabled:hover:text-white disabled:cursor-not-allowed'
        disabled={!isValid}
        type='submit'
        onClick={() => {}}
      >
        ادامه
      </button>
    </form>
  );
};

export default RegisterOtpForm;
