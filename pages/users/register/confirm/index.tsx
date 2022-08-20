import RegisterOtpForm from "../../../../common/components/elements/Forms/auth/RegisterOtpForm";
import Footer from "../../../../common/components/Layout/Footer/AuthFooter/Footer";
import AuthHeader from "../../../../common/components/Layout/Header/AuthHeader/AuthHeader";

const index: React.FC<{}> = ({}) => {
  return (
    <>
      <AuthHeader />
      <div className='container flex flex-col items-center justify-center gap-10 m-auto h-96'>
        <h1 className='text-xl font-normal text-gray-800'>ورود یا ثبت‌نام</h1>
        <RegisterOtpForm />
      </div>
      <Footer />
    </>
  );
};

export default index;