import usePortfolioContext from '@lib/Context/PortfolioContext'

import {
  BIOGRAPHY_FIRST_PARAGRAPH_ENGLISH,
  BIOGRAPHY_FIRST_PARAGRAPH_SPANISH,
  BIOGRAPHY_SECOND_PARAGRAPH_ENGLISH,
  BIOGRAPHY_SECOND_PARAGRAPH_SPANISH,
  BIOGRAPHY_THIRD_PARAGRAPH_ENGLISH,
  BIOGRAPHY_THIRD_PARAGRAPH_SPANISH,
  MEME_QUOTE_ENGLISH,
  MEME_QUOTE_SPANISH
} from './constants'

const BiographyCard = () => {
  const { currentLanguage } = usePortfolioContext()

  const renderBiography = () => {
    if (currentLanguage === 'ESPAÑOL') {
      return (
        <>
          <p>{BIOGRAPHY_FIRST_PARAGRAPH_SPANISH}</p>
          <p>{BIOGRAPHY_SECOND_PARAGRAPH_SPANISH}</p>
          <p>{BIOGRAPHY_THIRD_PARAGRAPH_SPANISH}</p>
        </>
      )
    }
    return (
      <>
        <p>{BIOGRAPHY_FIRST_PARAGRAPH_ENGLISH}</p>
        <p>{BIOGRAPHY_SECOND_PARAGRAPH_ENGLISH}</p>
        <p>{BIOGRAPHY_THIRD_PARAGRAPH_ENGLISH}</p>
      </>
    )
  }

  const renderQuoteSection = () => {
    if (currentLanguage === 'ESPAÑOL') {
      return (
        <blockquote>
          {MEME_QUOTE_SPANISH}
          <cite>~ Sun Tzu (Probablemente)</cite>
        </blockquote>
      )
    }
    return (
      <blockquote>
        {MEME_QUOTE_ENGLISH}
        <cite>~ Sun Tzu (Probably)</cite>
      </blockquote>
    )
  }

  return (
    <div>
      {renderBiography()}
      {renderQuoteSection()}
    </div>
  )
}

export default BiographyCard
