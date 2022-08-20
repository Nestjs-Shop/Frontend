const MainHeader: React.FC<{}> = ({}) => {
  return (
    <header className='container flex justify-between py-5 mx-auto border border-green-600'>
      <div className='border border-blue-600'>Profile</div>
      <div className='flex flex-col items-center gap-2 border border-violet-600'>
        <h1 className='text-3xl font-["Vilane"]'>DIGISINA</h1>
        <nav>
          <ul className='flex gap-2'>
            <li>زنانه</li>
            <li>مردانه</li>
            <li>بچگانه</li>
            <li>زیبایی و سلامت</li>
            <span className='border-l'></span>
            <li>حراج استایل</li>
            <li>برندها</li>
            <li>خانه ساعت</li>
          </ul>
        </nav>
      </div>
      <div className='border border-orange-600'>search</div>
    </header>
  );
};

export default MainHeader;
