import { GET_ARTICLES } from "@/graphql/queries";
import Hero from "@/components/UI/Hero";
import Slider from "@/components/UI/Slider";
import BackgroundHero from "../../public/background_hero.jpg";
import Image from "../../public/background_hero.jpg";

export default async function Home() {

  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/graphql`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: GET_ARTICLES
    }),
  });

  const articles = await res.json();

  const images = [Image.src, Image.src, Image.src,  Image.src]

  return (
    <div style={{height: "3000px"}}>
      <Hero
        subtitle="We talk about"
        title="Cloud computing"
        image={BackgroundHero.src}
        buttonLink="/"
        buttonText="Discover"
      />
      <Slider
        images={images}
      />
      {/* {
        articles && <GridPosts articles={articles.data.getArticles} />
      } */}
    </div>
  )
}