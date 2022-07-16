import delve from 'dlv';
import Link from 'next/link';

const Cta = ({ title, text, buttons, theme }) => {
  return (
    <div className={`bg-${theme}`}>
      <div className="lg:flex lg:items-center lg:justify-between w-2/3 mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <div className='lg:mt-0 lg:flex-shrink-0'>
          <h2 className="text-2xl font-extrabold text-black sm:text-3xl">
            {title && <span className="block">{title}</span>}
          </h2>
          <p className="text-1xl font-normal text-white sm:text-2xl">
            {text && <span className="block text-white">{text}</span>}
          </p>
        </div>
        <div className="lg:mt-0 lg:flex-shrink-0">
          {buttons &&
            buttons.map((button, index) => (
              <div
                className="mt-4 md:mt-4 inline-flex rounded-md shadow"
                key={`ctaButton-${index}`}
              >
                <Link
                  href={delve(button, 'link.href')}
                  key={`cta-button-${index}`}
                >
                  <a target={delve(button, 'link.target')}>
                    <button
                      type="button"
                      className={`py-4 px-6 bg-${delve(
                        button,
                        'theme'
                      )} hover:bg-secondary text-secondary-darker focus:ring-${delve(
                        button,
                        'theme'
                      )}-lighter w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg`}
                    >
                      {delve(button, 'link.label')}
                    </button>
                  </a>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

Cta.defaultProps = {};

export default Cta;
