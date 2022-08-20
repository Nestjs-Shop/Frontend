import {
  SubmitHandler,
  useController,
  useForm,
  useFormState,
} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema as schema } from '../../../../validation/schemas/login.schema';
import FloatingLabelInput from '../../Inputs/FloatingLabelInput';
import Link from 'next/link';
import { useRegisterStore } from '../../../../store/auth/register';
import { useRouter } from 'next/router';

export type MyInput = {
  emailOrPhone: string;
};

const LoginForm: React.FC<{}> = ({}) => {
  const {
    register,
    handleSubmit,
    control,
    getFieldState,
    formState: { errors, isValid },
    setFocus,
  } = useForm<MyInput>({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: {
      emailOrPhone: '',
    },
  });
  const controller = useController({ name: 'emailOrPhone', control });
  const { isTouched } = getFieldState('emailOrPhone');
  const storePhone = useRegisterStore((state) => state.setUserPhone);
  const router = useRouter();

  const onSubmit: SubmitHandler<MyInput> = (data) => {
    if (!isNaN(+data.emailOrPhone)) {
      const mobileExists = true;
      if (mobileExists) {
        storePhone(data.emailOrPhone);
        router.push('/users/register/confirm');
      } else {
        storePhone(data.emailOrPhone);
        router.push('/users/register/confirm');
      }
    } else {
      console.log(data);
    }
  };

  return (
    <form
      className='flex flex-col px-10 pb-[30px] border rounded-sm pt-9 w-11/12 xs:w-96'
      onSubmit={handleSubmit(onSubmit)}
    >
      <FloatingLabelInput
        id='emailOrPhone'
        type='text'
        name='emailOrPhone'
        dir='auto'
        label='شماره موبایل یا ایمیل'
        required
        isTouched={isTouched}
        register={register}
        controller={controller}
        setFocus={setFocus}
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
      <p className='mt-5 text-xs text-center text-gray-700 fort-thin'>
        ورود شما به معنای پذیرش{' '}
        <Link href='/' prefetch={false}>
          <a className='font-bold text-cyan-600'>شرایط دیجی‌سینا</a>
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
