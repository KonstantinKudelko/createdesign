import Image from "next/image";
import Link from "next/link";

export const Articles = ({ articles }) => {
  return (
    <section className="lg:mb-24 px-4 mb-12 max-w-[800px] flex flex-col container mx-auto">
      <h2 className="mb-16 text-5xl text-center text-white uppercase font-light">
        Articles
      </h2>

      <ul className="flex flex-col gap-8">
        {articles.map((article) => (
          <li key={article.slug} className="lg:flex-row flex flex-col">
            <Image
              height={150}
              width={350}
              alt={article.hero}
              src={article.hero}
              className="lg:w-auto lg:mr-8 lg:mb-0 w-full mr-0 mb-6"
            />

            <div className="flex flex-col justify-between">
              <div>
                <h3 className="mb-4 text-lg text-white uppercase font-light">
                  {article.title}
                </h3>

                <p className="mb-8 text-md text-white dark:white font-thin">
                  {article.description}
                </p>
              </div>

              <Link href={article.slug}>
                <div className="flex cursor-pointer">
                  <span className="block mt-1.5 mr-4 text-lg font-medium text-white">
                    Read more
                  </span>

                  <span className="w-[50px] h-[50px] flex items-center justify-center relative bottom-[5px] text-white font-thin text-xl border border-white rounded-full">
                    &#8594;
                  </span>
                </div>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
