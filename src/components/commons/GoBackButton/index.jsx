const GoBackButton = () => {
  const scrollToTopOfPage = () => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })

  const renderButton = () => <button onClick={scrollToTopOfPage}>SUBIR</button>

  return renderButton()
}

export default GoBackButton
