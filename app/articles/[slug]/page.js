import { getArticleContent, getArticleMetadata } from "@/helpers/mdx.helper";
import { Article } from "@/views";

export default async function ArticlePage({ params: { slug } }) {
  const content = await getArticleContent(slug);
  const { title } = await getArticleMetadata(slug);

  return <Article content={content} title={title} />;
}
