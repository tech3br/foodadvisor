import delve from 'dlv';
import Link from 'next/link';

const Nav = ({ links, locale }) => {
  console.log('links', links);
  return (
    <nav className="text-base mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      {links.map((link, index) => (
        <Link
          href={`${delve(link, 'href')}?lang=${locale || 'en'}`}
          key={`navigationLink-${index}`}
        >
          <a className="md:mr-10 hover:text-secondary" key={`link-${index}`}>
            {delve(link, 'label')}
          </a>
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
