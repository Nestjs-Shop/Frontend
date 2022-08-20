import React from 'react';
import LoginForm from '../../../common/components/elements/Forms/auth/LoginForm';
import Footer from '../../../common/components/Layout/Footer/AuthFooter/Footer';
import AuthHeader from '../../../common/components/Layout/Header/AuthHeader/AuthHeader';

const Auth: React.FC = () => {
  return (
    <>
      <AuthHeader />
      <div className='container flex flex-col items-center justify-center gap-10 m-auto h-96'>
        <h1 className='text-xl font-normal text-gray-800'>ورود یا ثبت‌نام</h1>
        <LoginForm />
      </div>
      <Footer />
    </>
  );
};

export default Auth;
