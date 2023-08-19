const ContactButton = ({ href, text, icon }) => (
  <a className={``} href={href} target="_blank" rel="noopener noreferrer">
    <button
      type="button"
      className={`font-bold uppercase p-3 rounded border-solid shadow-[0.25rem_0.25rem_#121212] transition-transform-[50ms]
        inline-flex items-center justify-center
      `}
    >
      <span>{icon}</span>
      {text}
    </button>
  </a>
)

export default ContactButton
