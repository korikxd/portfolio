import React from 'react'

const SectionBanner = ({ title, image }) => (
    <div className="relative w-full h-64 md:h-80 overflow-hidden bg-gradient-to-br from-firstAccent via-orange-400 to-firstAccent">
      {image && (
        <img
          src={image}
          alt="Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      <div className="absolute inset-0 bg-black/10 dark:bg-black/20"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white drop-shadow-lg">
            {title}
          </h1>
          <div className="mt-4 w-24 h-1 bg-white mx-auto rounded-full"></div>
        </div>
      </div>
    </div>
)

export default SectionBanner
