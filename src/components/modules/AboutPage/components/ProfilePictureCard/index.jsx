const ProfilePictureCard = ({ profilePictureRoute }) => {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-firstAccent to-orange-400 rounded-full blur-xl opacity-50 animate-pulse"></div>
        <img
          className="relative w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-firstAccent shadow-2xl"
          alt="Gabriel García Mercado"
          src={profilePictureRoute}
        />
      </div>
    </div>
  )
}

export default ProfilePictureCard
