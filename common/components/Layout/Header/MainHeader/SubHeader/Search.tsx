import SearchLabel from '../../../../elements/Labels/SearchLabel';

const Search: React.FC<{}> = ({}) => {
  return (
    <div className='flex items-start gap-2 pt-8 pb-1 border-b border-b-gray-500 h-fit'>
      <SearchLabel />
      <input
        className='text-sm text-gray-600 placeholder-gray-500 outline-none placeholder:text-xs caret-gray-600'
        type='text'
        placeholder='جستجوی محصولات از 1710 برند'
        id='search'
      />
    </div>
  );
};

export default Search;
