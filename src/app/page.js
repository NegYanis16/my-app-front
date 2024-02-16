import TitlePage from "@/components/UI/TitlePage";
import GridPosts from "@/components/UI/GridPosts";
import { GET_ARTICLES } from "@/graphql/queries";

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
    <div className="container">
      {/* on utilise le composant TitlePage */}
      <TitlePage title="Accueil" />
      {/* on utilise le composant GridPosts */}
      {
        articles && <GridPosts articles={articles.data.getArticles} />
      }
    </div>
  )
}