import { LayoutComponentProps } from '../../../types/layout/layout.type';
import Footer from '../Footer/AuthFooter/Footer';
import MainHeader from '../Header/MainHeader/MainHeader';

const Layout: React.FC<LayoutComponentProps> = ({ children }) => {
  return (
    <>
      <MainHeader />
      {children}
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
