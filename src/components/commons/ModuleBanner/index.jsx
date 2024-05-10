const ModuleBanner = ({ text, background }) => {
  return <div className={`w-full h-32 text-center bg-${background}`}>{text}</div>
}
export default ModuleBanner
