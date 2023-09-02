const Banner = () => {
  return (
    <div
      className={`h-1/3 font-bold text-5xl flex flex-col items-center justify-center`}
      style={{ backgroundImage: 'url(/banner.svg)' }}
    >
      <p className={``}>Gabriel García Mercado</p>
      <div className={`w-max`}>
        <p className={`animate-typing overflow-hidden whitespace-nowrap border-r-4 pr-5`}>Frontend Developer</p>
      </div>
    </div>
  )
}

export default Banner
