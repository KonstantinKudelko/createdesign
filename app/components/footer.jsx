import { ArrowNavLink } from "./arrow-nav-link";

export const Footer = () => (
  <footer className="sm:flex sm:flex-col md:flex-col lg:flex-col xl:flex-row px-4 mb-24 flex flex-col justify-between container mx-auto columns-4 gap-12">
    <div className="flex flex-col basis-80">
      <span className="mb-6 block text-white uppercase font-light">
        Newsletter
      </span>

      <p className="mb-12 text-gray font-light">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a est et
        mauris malesuada aliquet a nec sapien. Nunc volutpat.
      </p>

      <form className="flex flex-col">
        <input
          type="email"
          placeholder="Email"
          className="py-4 mb-8 bg-transparent border-b border-b-gray"
        />

        <button className="flex items-center justify-between">
          <span className="block mb-4 text-lg text-gray uppercase font-light">
            Subscribe
          </span>

          <ArrowNavLink />
        </button>
      </form>
    </div>

    <ul className="flex flex-col gap-y-4">
      <li>
        <a href="#" className="text-white uppercase font-light">
          Home page
        </a>
      </li>

      <li>
        <a href="#" className="text-white uppercase font-light">
          About
        </a>
      </li>

      <li>
        <a href="#" className="text-white uppercase font-light">
          Services
        </a>
      </li>

      <li>
        <a href="#" className="text-white uppercase font-light">
          Projects
        </a>
      </li>

      <li>
        <a href="#" className="text-white uppercase font-light">
          Contacts
        </a>
      </li>
    </ul>

    <div className="flex flex-col">
      <span className="mb-4 block text-white uppercase font-light">
        Contact us
      </span>

      <a
        href="tel:+13322489904"
        className="before:content-['\00B7'] before:text-white before:font-bold before:text-2xl before:mr-2 before:relative before:top-[1px] font-thin text-gray"
      >
        +13322489904
      </a>

      <a
        href="mailto:test@test.com"
        className="before:content-['\00B7'] before:text-white before:font-bold before:text-2xl before:mr-2 before:relative before:top-[1px] font-thin text-gray"
      >
        test@test.com
      </a>
    </div>

    <div className="flex flex-col">
      <span className="mb-4 block text-white uppercase font-light">
        Follow us
      </span>
    </div>
  </footer>
);
