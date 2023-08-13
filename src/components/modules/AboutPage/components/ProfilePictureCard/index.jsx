import { BsStars as StarIcon } from 'react-icons/bs'

const ProfilePictureCard = () => {
  return (
    <div className={`grid grid-cols-1`}>
      <img className={`w-48 h-48 rounded-full justify-self-center`} alt="avatar" src="/profile_picture.png" />
      <div className={``}>
        <h3>
          <StarIcon className={`inline-block`} /> GABRIEL GARCÍA MERCADO
          <StarIcon className={`inline-block scale-x-[-1]`} />
        </h3>
      </div>
    </div>
  )
}

export default ProfilePictureCard
