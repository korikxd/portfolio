const BiographyCard = ({ biographyTexts, currentLanguage }) => {
  const { firstParagraph, secondParagraph, thirdParagraph, memeQuote } = biographyTexts

  const renderBiography = () => (
    <>
      <p>
        {firstParagraph?.firstSentence}
        <b>{firstParagraph?.name}</b>
        {firstParagraph?.secondSentence}
        <b>{firstParagraph?.role}</b>
        {firstParagraph?.thirdSentence}
      </p>
      <p>{secondParagraph}</p>
      <p>{thirdParagraph}</p>
    </>
  )

  const renderQuoteSection = () => (
    <blockquote className={`p-4 my-4 border-l-4`}>
      <p className={`text-2xl italic font-medium`}>{memeQuote}</p>
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
