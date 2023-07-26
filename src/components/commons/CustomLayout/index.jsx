import Footer from '../Footer'
import NavigationMenu from '../NavigationMenu'

const CustomLayout = ({ children }) => {
  return (
    <div>
      <div className="flex flex-col h-screen justify-between">
        <header className="flex items-center justify-end py-8">
          <NavigationMenu />
        </header>
        <main className="mb-auto">{children}</main>
        <div className="flex flex-col mt-4 items-center py-8 font-light dark:text-white lg:py-8">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default CustomLayout
