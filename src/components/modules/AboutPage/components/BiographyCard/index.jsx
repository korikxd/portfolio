const BiographyCard = ({ biographyTexts, currentLanguage }) => {
  const { firstParagraph, secondParagraph, thirdParagraph, memeQuote } = biographyTexts

  const renderBiography = () => (
    <>
      <p>{firstParagraph}</p>
      <p>{secondParagraph}</p>
      <p>{thirdParagraph}</p>
    </>
  )

  const renderQuoteSection = () => (
    <blockquote>
      {memeQuote}
      <cite>~ Sun Tzu {currentLanguage === 'ESPAÑOL' ? '(Probablemente)' : '(Probably)'}</cite>
    </blockquote>
  )

  return (
    <div className={`grid grid-cols-1`}>
      {renderBiography()}
      {renderQuoteSection()}
    </div>
  )
}

export default BiographyCard
