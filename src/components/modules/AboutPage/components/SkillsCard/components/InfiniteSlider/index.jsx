import { useState } from 'react'

const InfiniteSlider = ({ logos }) => {
  const [hoveredSkill, setHoveredSkill] = useState(null)
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 })

  const handleMouseEnter = (skillKey, event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    setTooltipPosition({
      top: rect.top - 10,
      left: rect.left + rect.width / 2
    })
    setHoveredSkill(skillKey)
  }

  const handleMouseLeave = () => {
    setHoveredSkill(null)
  }

  return (
    <>
      <div className="relative overflow-hidden">
        <div className="animate-infinite-slider flex gap-8">
          {logos.map((singleSkill) => (
            <div
              className="group relative flex w-16 h-16 md:w-20 md:h-20 items-center justify-center text-4xl md:text-5xl text-firstAccent hover:scale-110 transition-transform duration-300 cursor-pointer"
              key={singleSkill.key}
              onMouseEnter={(e) => handleMouseEnter(singleSkill.key, e)}
              onMouseLeave={handleMouseLeave}
              onMouseMove={(e) => {
                if (hoveredSkill === singleSkill.key) {
                  const rect = e.currentTarget.getBoundingClientRect()
                  setTooltipPosition({
                    top: rect.top - 10,
                    left: rect.left + rect.width / 2
                  })
                }
              }}
            >
              {singleSkill.icon}
            </div>
          ))}
          {logos.map((singleSkill) => (
            <div
              className="group relative flex w-16 h-16 md:w-20 md:h-20 items-center justify-center text-4xl md:text-5xl text-firstAccent hover:scale-110 transition-transform duration-300 cursor-pointer"
              key={`${singleSkill.key}-duplicate`}
              onMouseEnter={(e) => handleMouseEnter(singleSkill.key, e)}
              onMouseLeave={handleMouseLeave}
              onMouseMove={(e) => {
                if (hoveredSkill === singleSkill.key) {
                  const rect = e.currentTarget.getBoundingClientRect()
                  setTooltipPosition({
                    top: rect.top - 10,
                    left: rect.left + rect.width / 2
                  })
                }
              }}
            >
              {singleSkill.icon}
            </div>
          ))}
        </div>
      </div>
      {hoveredSkill && (
        <div
          className="fixed z-[9999] pointer-events-none transition-opacity duration-200"
          style={{
            top: `${tooltipPosition.top}px`,
            left: `${tooltipPosition.left}px`,
            transform: 'translate(-50%, -100%)'
          }}
        >
          <div className="px-3 py-1.5 bg-light-text dark:bg-dark-text text-light-background dark:text-dark-background text-xs font-semibold rounded-lg shadow-lg whitespace-nowrap">
            {hoveredSkill}
            {/* Flecha del tooltip */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 w-2 h-2 bg-light-text dark:bg-dark-text rotate-45"></div>
          </div>
        </div>
      )}
    </>
  )
}

export default InfiniteSlider
