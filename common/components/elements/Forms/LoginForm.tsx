import { SubmitHandler, useController, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema as schema } from '../../../validation/formik-configs/login.config';
import FloatingLabelInput from '../Inputs/FloatingLabelInput';
import Link from 'next/link';

export type MyInput = {
  emailOrPhone: string;
};

const LoginForm: React.FC<{}> = ({}) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setFocus,
  } = useForm<MyInput>({
    resolver: yupResolver(schema),
    defaultValues: {
      emailOrPhone: '',
    },
  });
  const controller = useController({ name: 'emailOrPhone', control });

  const onSubmit: SubmitHandler<MyInput> = (data) => {
    console.log(data);
  };

  return (
    <form
      className='flex flex-col px-10 pb-[30px] border rounded-sm pt-9'
      onSubmit={handleSubmit(onSubmit)}
    >
      <FloatingLabelInput
        id='emailOrPhone'
        type='text'
        name='emailOrPhone'
        dir='auto'
        label='شماره موبایل یا ایمیل'
        required
        register={register}
        controller={controller}
        setFocus={setFocus}
        errors={errors}
      />
      <button
        className='p-[7px] mt-10 text-white transition-all border border-transparent rounded-sm disabled:bg-gray-300 disabled:border disabled:border-gray-300 bg-cyan-500 hover:bg-white hover:border hover:border-cyan-500 hover:text-cyan-500 disabled:hover:text-white disabled:cursor-not-allowed'
        disabled={false}
        type='submit'
        onClick={() => {
          console.log(errors);
        }}
      >
        ادامه
      </button>
      <p className='fort-thin mt-5 text-xs text-center text-gray-700'>
        ورود شما به معنای پذیرش{' '}
        <Link href='/' prefetch={false}>
          <a className='font-bold text-cyan-600'>شرایط دیجی‌کالا</a>
        </Link>{' '}
        و
        <br />
        <Link href='/' prefetch={false}>
          <a className='font-bold text-cyan-600'>قوانین حریم‌خصوصی</a>
        </Link>{' '}
        است.
      </p>
    </form>
  );
};

export default LoginForm;
