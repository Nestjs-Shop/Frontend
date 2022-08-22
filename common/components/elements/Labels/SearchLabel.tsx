const SearchLabel: React.FC<{}> = ({}) => {
  return (
    <label className='cursor-text' htmlFor='search'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='w-5 h-5 text-gray-500'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        strokeWidth={1}
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
        />
      </svg>
    </label>
  );
};

export default SearchLabel;
