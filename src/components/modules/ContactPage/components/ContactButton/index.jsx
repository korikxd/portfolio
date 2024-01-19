const ContactButton = ({ href, text, icon }) => (
  <a className={``} href={href} target="_blank" rel="noopener noreferrer">
    <button type="button" className={`flex items-center font-bold uppercase p-3 rounded bg-firstAccent`}>
      <span className={``}>{icon}</span>
      <span className={``}>{text}</span>
    </button>
  </a>
)

export default ContactButton
