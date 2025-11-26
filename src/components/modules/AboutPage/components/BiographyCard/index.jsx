const BiographyCard = ({ biographyTexts, currentLanguage }) => {
  const memeQuotes = {
    ESPAÑOL: {
      quote: 'No pases un cambio a producción un día viernes.',
      cite: 'Sun Tzu (Probablemente)'
    },
    ENGLISH: {
      quote: 'Don\'t push to main branch on a Friday',
      cite: 'Sun Tzu (Probably)'
    }
  }

  const currentQuote = currentLanguage === 'ESPAÑOL' ? memeQuotes.ESPAÑOL : memeQuotes.ENGLISH

  if (!biographyTexts) {
    const defaultTexts = {
      ESPAÑOL: {
        description: 'Hola!. Me llamo Gabriel soy un ingeniero en informática residente en Chile.',
        bio: 'Me encanta desarrollar nuevos productos desde principio a fin, impartiendo buenas prácticas y aprendiendo cada día nuevas cosas.\n\nEn mis tiempos libres me gusta jugar videojuegos, escuchar música, compartir con amigos y mi familia.'
      },
      ENGLISH: {
        description: 'Heya!. My name is Gabriel a software engineer based in Chile.',
        bio: 'I enjoy developing new products from start to finish, imparting best practices and learning new things every day.\n\nIn my free time, I like to play some videogames, listen to music and spend some time with friends and family.'
      }
    }

    const texts = currentLanguage === 'ESPAÑOL' ? defaultTexts.ESPAÑOL : defaultTexts.ENGLISH

    return (
      <div className="w-full max-w-4xl mx-auto space-y-8">
        <div className="bg-light-background dark:bg-dark-background rounded-2xl p-8 md:p-12 shadow-lg border border-light-text/10 dark:border-dark-text/10">
          <p className="text-lg text-light-text dark:text-dark-text leading-relaxed mb-4">{texts.description}</p>
          <p className="text-lg text-light-text dark:text-dark-text leading-relaxed whitespace-pre-line">{texts.bio}</p>
        </div>
        {renderQuoteSection(currentQuote, currentLanguage)}
      </div>
    )
  }

  const { firstParagraph, secondParagraph, thirdParagraph, memeQuote, cite } = biographyTexts

  const renderBiography = () => (
    <>
      <p className="text-lg text-light-text dark:text-dark-text leading-relaxed mb-4">
        {firstParagraph?.firstSentence}
        <b className="text-firstAccent">{firstParagraph?.name}</b>
        {firstParagraph?.secondSentence}
        <b className="text-firstAccent">{firstParagraph?.role}</b>
        {firstParagraph?.thirdSentence}
      </p>
      <p className="text-lg text-light-text dark:text-dark-text leading-relaxed mb-4">{secondParagraph}</p>
      <p className="text-lg text-light-text dark:text-dark-text leading-relaxed">{thirdParagraph}</p>
    </>
  )

  const quoteToShow = memeQuote ? { quote: memeQuote, cite } : currentQuote

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      <div className="bg-light-background dark:bg-dark-background rounded-2xl p-8 md:p-12 shadow-lg border border-light-text/10 dark:border-dark-text/10">
        {renderBiography()}
      </div>
      {renderQuoteSection(quoteToShow, currentLanguage)}
    </div>
  )
}

const renderQuoteSection = (quoteData, language) => {
  return (
    <blockquote className="relative bg-light-background dark:bg-dark-background rounded-2xl p-6 md:p-8 shadow-lg border border-light-text/10 dark:border-dark-text/10">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-firstAccent rounded-l-2xl"></div>
      <div className="pl-6 md:pl-8">
        <p className="text-xl md:text-2xl italic font-medium text-light-text dark:text-dark-text mb-3">
          &quot;{quoteData.quote}&quot;
        </p>
        <cite className="text-sm md:text-base text-light-text/80 dark:text-dark-text/80 font-normal not-italic">
          — {quoteData.cite}
        </cite>
      </div>
    </blockquote>
  )
}

export default BiographyCard
