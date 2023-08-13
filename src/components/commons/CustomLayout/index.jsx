import Footer from '../Footer'
import NavigationMenu from '../NavigationMenu'

const CustomLayout = ({ children }) => {
  return (
    <div className={`flex flex-col h-screen`}>
      <header className={`flex items-center justify-end py-8`}>
        <NavigationMenu />
      </header>
      <main className={`flex flex-col grow`}>
        {children}
        <footer className={`flex flex-col items-center py-8 font-light dark:text-white`}>
          <Footer />
        </footer>
      </main>
    </div>
  )
}

export default CustomLayout
