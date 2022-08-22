import Link from 'next/link';
const Profile: React.FC<{}> = ({}) => {
  return (
    <div className='flex items-center justify-center w-1/6 gap-4 pt-7 h-fit'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='w-6 h-6 text-gray-800'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        strokeWidth={1}
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
        />
      </svg>
      <Link href='/users/authentication' prefetch={false}>
        <a className='p-2 text-sm'>وارد شوید</a>
      </Link>
    </div>
  );
};

export default Profile;

