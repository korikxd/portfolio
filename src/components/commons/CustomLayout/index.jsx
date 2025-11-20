import usePortfolioContext from '@lib/Context/PortfolioContext';
import Footer from '../Footer';
import NavigationMenu from '../NavigationMenu';

const CustomLayout = ({ children }) => {

  const {
    portfolioContent: {
      content: { homePageText },
      language
    }
  } = usePortfolioContext();

  return (
    <div className={`flex flex-col h-screen`}>
      <header className={`flex justify-end py-8`}>
        <NavigationMenu />
      </header>
      <main className={`flex flex-col grow`}>
        {children}
        <footer className={`flex flex-col items-center py-8 font-light`}>
          <Footer socials={homePageText.socials} currentLanguage={language} />
        </footer>
      </main>
    </div>
  );
};

export default CustomLayout;
