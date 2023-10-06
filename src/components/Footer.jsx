const links = [
  {
    label: 'About Me',
    href: '#about-me'
  },
  {
    label: 'Experience',
    href: '#experience'
  },
  {
    label: 'Projects',
    href: '#projects'
  },
  {
    label: 'Contact Me',
    href: '#contact-me'
  }
];
const Footer = () => {
  return (
    <footer className="bg-slate-950 shadow ">
      <div className="w-full min-h-[10vh] mx-auto p-4 md:flex md:items-center md:justify-between">
        <span className="text-lg text-gray-300 sm:text-center ">
          © 2023{' '}
          <a href="/" className="hover:underline">
            Jonslogar M. Arenque
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-300  sm:mt-0">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="mr-4 hover:underline md:mr-6 text-lg"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
