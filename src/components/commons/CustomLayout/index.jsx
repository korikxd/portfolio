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
    <div className="flex flex-col min-h-screen bg-light-background dark:bg-dark-background transition-colors duration-300">
      <NavigationMenu />
      <main className="flex flex-col flex-grow">
        {children}
      </main>
      <Footer socials={homePageText.socials} currentLanguage={language} />
    </div>
  )
};

export default CustomLayout;
