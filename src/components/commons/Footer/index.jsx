import Link from 'next/link';

const Footer = ({ socials, currentLanguage }) => {

  const getSocialLink = (social) => {
    if (social.dynamicLink && social.dynamicLink[currentLanguage]) {
      return social.dynamicLink[currentLanguage];
    }
    return social.link;
  };

  return (
    <div className={`h-1/3 flex justify-center items-center gap-12`}>
      {socials.map((social, index) => (
        <button
          key={index}
          className={`flex justify-center items-center transform hover:-translate-y-3 border-2 w-12 h-12 rounded-full duration-500 hover:bg-${social.color} text-2xl`}
        >
          <Link target="_blank" rel="noopener noreferrer" href={getSocialLink(social)}>
            {social.icon}
          </Link>
        </button>
      ))}
    </div>
  );
};

export default Footer;
