import type { NextPage } from 'next';
import MainLayout from '../common/components/Layout/MainLayout/MainLayout';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <div>
        <h1 className='text-3xl font-bold border border-red-500'>Body</h1>
      </div>
    </MainLayout>
  );
};

export default Home;
