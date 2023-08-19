import { HiMiniArrowUpRight } from 'react-icons/hi2'

const ExperienceCard = ({ experiences }) => {
  const renderExperiences = () => (
    <div className={`relative col-span-12 px-4 space-y-6 sm:col-span-9`}>
      <div
        className={`col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-primary`}
      >
        {experiences.jobs.map((work, index) => (
          <div
            key={index}
            className={`flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-primary`}
          >
            <h3 className="text-xl font-semibold">
              <a href={work.link} target="_blank" rel="noopener noreferrer">
                {work.title} <HiMiniArrowUpRight className={`w-[1px]`} />{' '}
              </a>
            </h3>
            <time className="text-xs uppercase dark:text-gray-400">{work.date}</time>
            <p className="mt-3">{work.description}</p>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <div className={``}>
      <h1>{experiences.title}</h1>
      {renderExperiences()}
    </div>
  )
}

export default ExperienceCard
