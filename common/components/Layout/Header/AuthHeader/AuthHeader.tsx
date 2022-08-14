import Link from 'next/link';

const AuthHeader: React.FC = () => {
  return (
    <header className='py-4 shadow-md '>
      <h1 className='font-["Vilane"] text-3xl text-center'>
        <Link href='/' prefetch={false}>
          DIGISINA
        </Link>
      </h1>
    </header>
  );
};

export default AuthHeader;
