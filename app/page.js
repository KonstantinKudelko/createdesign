import { Home } from "@/views";
import { getArticlesMetadata } from "@/helpers/mdx.helper";

export default async function HomePage() {
  const articles = await getArticlesMetadata();
  return <Home articles={articles} />;
}
