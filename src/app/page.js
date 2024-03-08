import { GET_ARTICLES } from "@/graphql/queries";
import Hero from "@/components/UI/Hero";

export default async function Home() {

  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/graphql`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: GET_ARTICLES
    }),
  });

  const articles = await res.json();

  return (
    <div>
      <Hero/>
      {/* {
        articles && <GridPosts articles={articles.data.getArticles} />
      } */}
    </div>
  )
}