const InfiniteSlider = ({ logos }) => {
  return (
    <div className={`animate-infinite-slider flex w-[calc(250px*10)]`}>
      <div className={`slide flex items-center justify-center`}>
        {logos.map((singleSkill) => (
          <div className={`slide flex w-[50px]  items-center justify-center group-hover:opat`} key={singleSkill.key}>
            {singleSkill.icon}
          </div>
        ))}
        {logos.map((singleSkill) => (
          <div className={`slide flex w-[50px]  items-center justify-center`} key={singleSkill.key}>
            {singleSkill.icon}
          </div>
        ))}
      </div>
    </div>
  )
}

export default InfiniteSlider
