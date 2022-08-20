const Footer: React.FC<{}> = ({}) => {
  return (
    <footer className='fixed bottom-0 left-0 right-0 w-full py-3 mx-auto bg-gray-100 '>
      <div className='container flex justify-between mx-auto text-xs md:w-3/4 md:flex-row flex-col items-center gap-1 md:gap-0'>
        <h6>کلیه حقوق این سایت متعلق به دیجی‌سینا می باشد.</h6>
        <h6>digisina.com - 2022 © Copyright</h6>
      </div>
    </footer>
  );
};

export default Footer;
