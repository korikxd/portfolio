const ContactButton = ({ href, text, icon }) => (
  <a className={``} href={href} target="_blank" rel="noopener noreferrer">
    <button type="button" className={`flex items-center font-bold uppercase p-3 rounded bg-primaryOrange`}>
      <span className={`text-lightBackground`}>{icon}</span>
      <span className={`text-lightFontColor`}>{text}</span>
    </button>
  </a>
)

export default ContactButton
