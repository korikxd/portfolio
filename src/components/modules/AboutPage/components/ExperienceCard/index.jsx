import { HiMiniArrowUpRight } from 'react-icons/hi2'

const ExperienceCard = ({ experiences }) => {
  const renderExperiences = () => (
    <div className={`relative col-span-12 px-4 space-y-6 sm:col-span-9`}>
      <div
        //TODO --> Fix bg color
        className={`col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-`}
      >
        {experiences.jobs.map((work, index) => (
          <div
            key={index}
            //TODO --> Fix bg color
            className={`flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-`}
          >
            <h3 className={`text-xl font-semibold`}>
              <a href={work.link} target="_blank" rel="noopener noreferrer">
                {work.title} {work.link && <HiMiniArrowUpRight width={24} height={24} className={`inline-block`} />}
              </a>
            </h3>
            <time className={`text-xs uppercase`}>{work.date}</time>
            <p className={`mt-3`}>{work.description}</p>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <div className={``}>
      <h2 className={``}>{experiences.title}</h2>
      {renderExperiences()}
    </div>
  )
}

export default ExperienceCard
