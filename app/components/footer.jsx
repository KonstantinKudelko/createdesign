import { NewsletterForm } from "./newsletter-form";

export const Footer = () => (
  <footer className="sm:flex sm:flex-col md:flex-col lg:flex-col xl:flex-row px-4 mb-24 flex flex-col justify-between container mx-auto columns-4 gap-12">
    <NewsletterForm />

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
        href="tel:+1212249367"
        className="before:content-['\00B7'] before:text-white before:font-bold before:text-2xl before:mr-2 before:relative before:top-[1px] font-thin text-gray"
      >
        +1212249367
      </a>

      <a
        href="mailto:info@create-design.us"
        className="before:content-['\00B7'] before:text-white before:font-bold before:text-2xl before:mr-2 before:relative before:top-[1px] font-thin text-gray"
      >
        info@create-design.us
      </a>
    </div>

    <div className="flex flex-col">
      <span className="mb-4 block text-white uppercase font-light">
        Follow us
      </span>
    </div>
  </footer>
);
