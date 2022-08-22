import Main from './SubHeader/Main';
import Profile from './SubHeader/Profile';
import Search from './SubHeader/Search';

const MainHeader: React.FC<{}> = ({}) => {
  return (
    <header className='bg-transparent'>
      <div className='container flex justify-between mx-auto'>
        <Profile />
        <Main />
        <Search />
      </div>
    </header>
  );
};

export default MainHeader;
